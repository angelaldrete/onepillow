import { NextResponse } from "next/server";
import { prisma } from "../../../../_config";

export async function GET(request: Request, { params }: { params: { arrivalDate: string, departureDate: string } }) {
  try {
    const { arrivalDate, departureDate } = params;

    // Convert the arrival and departure dates to Date objects
    const startDate = new Date(arrivalDate);
    const endDate = new Date(departureDate);

    // Initialize a flag to track conflicts
    let hasConflict = false;

    while (startDate <= endDate) {
      // Count reservations for each day within the date range
      const reservationCount = await prisma.reservation.count({
        where: {
          arrivalDate: {
            lte: startDate,
          },
          departureDate: {
            gt: startDate,
          },
        },
      });

      if (reservationCount >= 10) {
        hasConflict = true;
        break; // Exit the loop if a conflict is found
      }

      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }

    if (hasConflict) {
      return NextResponse.json({
        message: "Reservation conflict: The selected date range contains dates with 10 or more reservations. Please select another range.",
        hasConflict: true,
      });
    } else {
      return NextResponse.json({
        message: "No reservation conflicts found.",
        hasConflict: false,
      });
    }

  } catch (error) {
    return NextResponse.error();
  }
}
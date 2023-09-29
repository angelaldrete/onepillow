import { NextResponse } from "next/server";
import { prisma } from "../../../../_config";

export async function GET(request: Request, { params } : { params: {month: string, year: string}}) {
  try {
    const { month, year } = params;
    const reservationsByDate = await prisma.reservation.findMany({
      select: {
        arrivalDate: true,
        departureDate: true,
      },
      where: {
        arrivalDate: {
          gte: new Date(`${year}-${month}-01`),
          lt: new Date(`${year}-${month}-31`),
        },
        AND: {
          departureDate: {
            gte: new Date(`${year}-${month}-01`),
            lt: new Date(`${year}-${month}-31`),
          },
        },
      },
    });

    if (!reservationsByDate) {
      return NextResponse.json({
        message: "No reservations found",
      });
    }

    return NextResponse.json({
      reservations: reservationsByDate,
    });

  } catch (error) {
    return NextResponse.json({
      error
    });
  }
}
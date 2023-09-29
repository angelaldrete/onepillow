import { NextResponse } from "next/server";
import { prisma } from "../_config";

export async function GET(request: Request) {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        customer: {
          select: {
            name: true,
          },
        },
        room: {
          select: {
            name: true,
          },
        },
      }
    });

    if (!reservations) {
      return NextResponse.json({
        message: 0,
      });
    }

    return NextResponse.json({
      reservations: reservations,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, customerId, arrivalDate, departureDate, roomId} = data;

    const reservation = await prisma.reservation.create({
      data: {
        name,
        customerId: parseInt(customerId),
        arrivalDate,
        departureDate,
        roomId: parseInt(roomId),
      },
    });

    if (!reservation) {
      return NextResponse.next();
    }

    return NextResponse.json({
      message: "Reservation created successfully",
      reservation: reservation,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating reservation",
      error
    });
    // return NextResponse.error();
  }
}

export async function DELETE(request: Request) {

  try {
    await prisma.reservation.deleteMany();

    return NextResponse.json({
      message: "Reservations deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error deleting reservation",
      error
    });
  }
}
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const reservations = await prisma.reservation.findMany();

    if (!reservations) {
      return NextResponse.json({
        message: "No reservations found",
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
    const { customerId, arrivalDate, departureDate, roomId} = data;

    const reservation = await prisma.reservation.create({
      data: {
        customerId,
        arrivalDate,
        departureDate,
        roomId,
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
    return NextResponse.error();
  }
}

export async function PUT(request: Request, { params } : { params: {id: string} } ) {
  try {
    const data = await request.json();
    const { customerId, arrivalDate, departureDate, roomId} = data;

    const reservation = await prisma.reservation.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        customerId,
        arrivalDate,
        departureDate,
        roomId,
      },
    });

    if (!reservation) {
      return NextResponse.json({
        message: "Reservation not found",
      });
    }

    return NextResponse.json({
      message: "Reservation updated successfully",
      reservation: reservation,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        message: "Reservation not found",
      });
    }

    const reservation = await prisma.reservation.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!reservation) {
      return NextResponse.json({
        message: "Reservation not found",
      });
    }

    return NextResponse.json({
      message: "Reservation deleted successfully",
      reservation,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

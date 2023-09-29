import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request, { params } : { params: {id: string}}) {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: parseInt(params.id),
      },
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
      },
    });

    if (!reservation) {
      return NextResponse.json({
        message: "Reservation not found",
      });
    }

    return NextResponse.json({
      reservation: reservation,
    });

  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}

export async function PUT(request: Request, { params } : { params: {id: string} } ) {
  try {
    const data = await request.json();
    const { name, customerId, arrivalDate, departureDate, roomId} = data;

    const reservation = await prisma.reservation.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name,
        customerId: parseInt(customerId),
        arrivalDate,
        departureDate,
        roomId: parseInt(roomId),
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
    return NextResponse.json({ message: 'Error' })
  }
}

export async function DELETE(request: Request, { params } : { params: {id: string}}) {
  try {

    const id = params.id;

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
    return NextResponse.json({
      error
    });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export async function GET(request: Request, { params } : { params: {id: string}}) {
  try {
    const room = await prisma.room.findUnique({
      where: {
        id: parseInt(params.id),
      },
      select: {
        name: true,
        price: true,
        description: true,
      }
    });

    if (!room) {
      return NextResponse.json({
        message: "Room not found",
      });
    }

    return NextResponse.json({
      room: room,
    });

  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(request: Request, { params } : { params: {id: string} } ) {
  try {
    const data = await request.json();
    const { name, price, description} = data;

    const room = await prisma.room.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name,
        price: parseInt(price),
        description
      },
    });

    if (!room) {
      return NextResponse.json({
        message: "Room not found",
      });
    }

    return NextResponse.json({
      message: "Room updated successfully",
      room: room,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string }}) {
  try {

    const id = params.id;

    if (!id) {
      return NextResponse.json({
        message: "Room not found",
      });
    }

    const room = await prisma.room.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!room) {
      return NextResponse.json({
        message: "Room not found",
      });
    }

    return NextResponse.json({
      message: "Room deleted successfully",
      room: room,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
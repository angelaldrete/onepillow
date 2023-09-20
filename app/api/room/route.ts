import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const rooms = await prisma.room.findMany();

    if (!rooms) {
      return NextResponse.json({
        message: "No rooms found",
      });
    }

    return NextResponse.json({
      rooms: rooms,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, capacity, type, price} = data;

    const room = await prisma.room.create({
      data: {
        name,
        capacity,
        type,
        price,
      },
    });

    if (!room) {
      return NextResponse.next();
    }

    return NextResponse.json({
      message: "Room created successfully",
      room: room,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(request: Request, { params } : { params: {id: string} } ) {
  try {
    const data = await request.json();
    const { name, capacity, type, price} = data;

    const room = await prisma.room.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name,
        capacity,
        type,
        price,
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

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

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

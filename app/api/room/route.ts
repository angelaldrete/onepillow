import { NextResponse } from "next/server";
import { prisma } from "../_config";

export const dynamic = 'force-dynamic'
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
    return NextResponse.json({ message: 'Error' })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, price, description} = data;

    const room = await prisma.room.create({
      data: {
        name,
        price: parseInt(price),
        description
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
    return NextResponse.json({ message: 'Error' })
  }
}



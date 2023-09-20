import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, { params } : { params: {id: string}}) {
  try {
    const room = await prisma.room.findUnique({
      where: {
        id: parseInt(params.id),
      },
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
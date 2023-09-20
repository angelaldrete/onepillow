import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const avgReservations = await prisma.reservation.aggregate({
      _avg: {
        id: true,
      },
    });

    if (!avgReservations) {
      return NextResponse.json({
        message: "No reervations found",
      });
    }

    return NextResponse.json({
      avgReservations: avgReservations,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
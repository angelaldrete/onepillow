import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, { params } : { params: {id: string}}) {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: parseInt(params.id),
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
    return NextResponse.error();
  }
}
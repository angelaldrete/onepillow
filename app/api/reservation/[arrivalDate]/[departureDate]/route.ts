import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, { params } : { params: {arrivalDate: string, departureDate: string}}) {
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        arrivalDate: {
          gte: new Date(params.arrivalDate),
        },
        departureDate: {
          lte: new Date(params.departureDate),
        },
      },
    });

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
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    const totalReservations = await prisma.reservation.count();

    if (!totalReservations) {
      return NextResponse.json({
        message: 0,
      });
    }

    return NextResponse.json({
      totalReservations: totalReservations,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }

}
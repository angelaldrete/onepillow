import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const monthlyReservations = await prisma.$queryRaw
      `SELECT DATE_FORMAT(reservation_date, '%Y-%m') AS date, COUNT(*) AS quantity FROM reservation GROUP BY date ORDER BY date DESC`;

    if (!monthlyReservations) {
      return NextResponse.json({
        message: "No reservations found",
      });
    }

    return NextResponse.json({
      monthlyReservations: monthlyReservations,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
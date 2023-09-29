import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    const recentReservations = await prisma.reservation.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
      select: {
        id: true,
        name: true,
        arrivalDate: true,
        departureDate: true,
      },
    });

    if (!recentReservations) {
      return NextResponse.json({
        message: 0,
      });
    }

    return NextResponse.json({
      recentReservations,
    });
  }
  catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}
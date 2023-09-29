import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {

    const monthlyReservations = await prisma.reservation.groupBy({
      by: ["createdAt"],
      _count: {
        _all: true,
      },
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        },
      },
    });

    
    if (!monthlyReservations) {
      return NextResponse.json({
        message: 0,
      });
    }

    const dateCountsMap = new Map();
    monthlyReservations.forEach((reservation) => {
      if (reservation.createdAt === null) return;

      const date = new Date(reservation.createdAt).toISOString().split("T")[0];
      const count = reservation._count._all;

      if (dateCountsMap.has(date)) {
        dateCountsMap.set(date, dateCountsMap.get(date) + count);
      } else {
        dateCountsMap.set(date, count);
      }
    });
    
    const formattedMonthlyReservations = Array.from(dateCountsMap, ([date, value]) => ({
      date,
      value,
    }));

    return NextResponse.json({
      monthlyReservations: formattedMonthlyReservations,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}
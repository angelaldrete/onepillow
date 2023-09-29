import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export async function GET(request: Request) {
  try {
  
    const totalReservations = await prisma.reservation.count(
      {
        where: {
          AND: [
            {
              createdAt: {
                gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              },
            },
            {
              createdAt: {
                lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
              },
            },
          ],
        },
      }
    );

    const avgReservations = totalReservations / new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

    
    if (!avgReservations) {
      return NextResponse.json({
        message: 0  ,
      });
    }

    return NextResponse.json({
      avgReservations: Math.floor(avgReservations),
    });
  } catch (error) {
    return NextResponse.error();
  }
}
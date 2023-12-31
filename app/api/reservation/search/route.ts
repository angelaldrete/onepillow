import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    // search url query
    const { searchParams } = new URL(request.url);

    // get search query
    const query = searchParams.get("query");

    // get all reservations raw query
    const reservations = await prisma.$queryRaw
      `SELECT * FROM "Reservation" WHERE "name" ILIKE '%${query}%'`
    ;

    if (!reservations) {
      return NextResponse.json({
        message: "No reservations found",
      });
    }

    return NextResponse.json({
      reservations: reservations,
    });
    
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}
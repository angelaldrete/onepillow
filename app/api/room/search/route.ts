import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export async function GET(request: Request) {
  try {
    // search url query
    const { searchParams } = new URL(request.url);

    // get search query
    const query = searchParams.get("query");

    // get all rooms raw query
    const rooms = await prisma.$queryRaw
      `SELECT * FROM "Reservation" WHERE "name" ILIKE '%${query}%'`
    ;

    if (!rooms) {
      return NextResponse.json({
        message: "No rooms found",
      });
    }

    return NextResponse.json({
      rooms: rooms,
    });
    
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}
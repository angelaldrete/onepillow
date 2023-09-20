import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    // search url query
    const { searchParams } = new URL(request.url);

    // get search query
    const query = searchParams.get("query");

    // get all customers raw query
    const customers = await prisma.$queryRaw
      `SELECT * FROM "Customer" WHERE "name" ILIKE '%${query}%'`
    ;

    if (!customers) {
      return NextResponse.json({
        message: "No customers found",
      });
    }

    return NextResponse.json({
      customers,
    });
    
  } catch (error) {
    return NextResponse.error();
  }
}
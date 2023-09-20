import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const avgCustomers = await prisma.customer.aggregate({
      _avg: {
        id: true,
      },
    });

    if (!avgCustomers) {
      return NextResponse.json({
        message: "No customers found",
      });
    }

    return NextResponse.json({
      avgCustomers,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
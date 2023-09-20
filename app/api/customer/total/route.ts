import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const totalCustomers = await prisma.customer.count();

    if (!totalCustomers) {
      return NextResponse.json({
        message: "No customers found",
      });
    }

    return NextResponse.json({
      totalCustomers,
    });
  } catch (error) {
    return NextResponse.error();
  }

}
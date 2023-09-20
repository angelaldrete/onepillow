import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, { params } : { params: {id: string}}) {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    if (!customer) {
      return NextResponse.json({
        message: "Customer not found",
      });
    }

    return NextResponse.json({
      customer,
    });

  } catch (error) {
    return NextResponse.error();
  }
}
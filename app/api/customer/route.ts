import { NextResponse } from "next/server";
import { prisma } from "../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    const customers = await prisma.customer.findMany();

    if (!customers) {
      return NextResponse.json({
        message: "No customers found",
      });
    }

    return NextResponse.json({
      customers,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, address, notes, country, state, city, zip } = data;

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        address,
        notes,
        country,
        state,
        city,
        zip,
      },
    });

    if (!customer) {
      return NextResponse.next();
    }

    return NextResponse.json({
      message: "Customer created successfully",
      customer,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}

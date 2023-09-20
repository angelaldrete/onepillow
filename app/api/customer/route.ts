import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    return NextResponse.error();
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
    return NextResponse.error();
  }
}

export async function PUT(request: Request, { params } : { params: {id: string} } ) {
  try {
    const data = await request.json();
    const { name, email, phone, address, notes, country, state, city, zip } = data;

    const customer = await prisma.customer.update({
      where: {
        id: parseInt(params.id),
      },
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
      return NextResponse.json({
        message: "Customer not found",
      });
    }

    return NextResponse.json({
      message: "Customer updated successfully",
      customer,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        message: "Customer not found",
      });
    }

    const customer = await prisma.customer.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!customer) {
      return NextResponse.json({
        message: "Customer not found",
      });
    }

    return NextResponse.json({
      message: "Customer deleted successfully",
      customer,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

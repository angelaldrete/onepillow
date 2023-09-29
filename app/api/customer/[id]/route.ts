import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request, { params } : { params: {id: string}}) {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: parseInt(params.id),
      },

      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        city: true,
        state: true,
        zip: true,
        country: true,
        notes: true,
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
    return NextResponse.json({ message: 'Error' })
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
    return NextResponse.json({ message: 'Error' })
  }
}

export async function DELETE(request: Request, { params } : { params: {id: string} }) {
  try {

    const { id } = params;

    if (!id) {
      return NextResponse.json({
        message: "Customer not found",
      });
    }

    // delete all reservations for this customer

    const reservations = await prisma.reservation.deleteMany({
      where: {
        customerId: parseInt(id),
      },
    });

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
    return NextResponse.json({ message: 'Error' })
  }
}
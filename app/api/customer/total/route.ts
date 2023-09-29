import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    const totalCustomers = await prisma.customer.count();

    if (!totalCustomers) {
      return NextResponse.json({
        value: 0,
      });
    }

    return NextResponse.json({
      totalCustomers,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }

}
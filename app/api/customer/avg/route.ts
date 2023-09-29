import { NextResponse } from "next/server";
import { prisma } from "../../_config";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    const totalCustomers = await prisma.customer.count(
      {
        where: {
          AND: [
            {
              createdAt: {
                gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              },
            },
            {
              createdAt: {
                lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
              },
            },
          ],
        },
      }
    );

    const avgCustomers = totalCustomers / new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

    if (!avgCustomers) {
      return NextResponse.json({
        value: 0,
      });
    }

    return NextResponse.json({
      avgCustomers: Math.floor(avgCustomers),
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error' })
  }
}
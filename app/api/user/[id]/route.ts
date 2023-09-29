import { NextResponse } from "next/server";
import { prisma } from "../../_config";


export async function DELETE(request: Request, { params }: { params: { id: string }}) {
  try {
    const id = params.id;
  
    if (!id) {
      return NextResponse.next();
    }
  
    const user = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  
    if (!user) {
      return NextResponse.next();
    }
  
    return NextResponse.json({
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    return NextResponse.next();
  }

}
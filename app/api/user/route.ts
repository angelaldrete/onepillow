import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    const users = await prisma.user.findMany();

    if (users.length === 0) {
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: passwordHash,
        },
      });

      if (!newUser) {
        return NextResponse.next();
      }

      return NextResponse.json({
        message: "User created successfully",
        user: newUser,
      });
    }
  
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  
    if (user) {
      return NextResponse.json({
          message: "User already exists",
      });
    }
  
    const passwordHash = await bcrypt.hash(password, 10);
  
    const newUser = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
      },
    });
  
    if (!newUser) {
      return NextResponse.next();
    }
  
    return NextResponse.json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    return NextResponse.next();
  }
}

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
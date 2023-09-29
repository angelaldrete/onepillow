import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../_config";

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
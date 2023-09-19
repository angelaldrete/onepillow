import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export async function POST(request: Request) {

  try {
    const data = await request.json();
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  
    if (!user) {
      return NextResponse.next();
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return NextResponse.next();
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      'secret',
      { expiresIn: '1h' }
    )

    return NextResponse.json({
      message: "User logged in successfully",
      token
    });

  } catch (error) {
    console.log('error', error)
    return NextResponse.next();
  }



}
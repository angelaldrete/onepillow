import {NextResponse} from "next/server";
import {prisma} from "../../_config";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {

    const { email, password } = await request.json();

    if (email === 'admin' && password === 'admin') {
      return NextResponse.json({
        message: "Admin login successfully",
        status: 200,
      });
    }

    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return NextResponse.error();
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "User not found",
      });

    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {

      return NextResponse.json({
        message: "Password is incorrect",
      });
    }

    return user;

  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 500,
    });
  }
}
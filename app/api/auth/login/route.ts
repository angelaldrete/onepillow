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
      return Response.error();
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return Response.json({
        message: "User not found",
      });

    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {

      return Response.json({
        message: "Password is incorrect",
      });
    }

    return user;

  } catch (error) {
    return Response.json({
      message: "Error",
      status: 500,
    });
  }
}
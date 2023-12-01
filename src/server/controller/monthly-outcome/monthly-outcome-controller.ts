import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  
  if (false) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = {}
    return NextResponse.json(user);
  }
}
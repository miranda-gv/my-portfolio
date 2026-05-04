import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const ADMIN_HASH = process.env.ADMIN_PASSWORD_HASH!;

/**
 * POST /api/admin-login
 * Validates admin password and sets an HTTP-only cookie.
 */
export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!password || !ADMIN_HASH) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  }

  const isValid = bcrypt.compareSync(password, ADMIN_HASH);

  if (!isValid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return response;
}

/**
 * DELETE /api/admin-login
 * Clears the admin auth cookie (logout).
 */
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}

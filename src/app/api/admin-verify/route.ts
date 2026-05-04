import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/admin-verify
 * Checks if the request has a valid admin auth cookie.
 */
export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("admin-auth")?.value;
  return NextResponse.json({ isAdmin: cookie === "1" });
}

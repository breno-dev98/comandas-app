// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value ?? req.cookies.get("__Secure-next-auth.session-token")?.value;

  const url = req.nextUrl.pathname;

  if (url.startsWith("/(protected)")) {
    if (!token) return NextResponse.redirect(new URL("/auth", req.url));

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.AUTH_SECRET));
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(protected)/:path*"],
};

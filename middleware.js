import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.nextUrl.pathname !== "./login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.json({ success: "successful" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};

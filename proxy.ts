import { NextResponse, NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("Proxy triggered for request:", request);
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};

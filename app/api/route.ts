import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  console.log("GET request received", request);

  return new Response("Hello, World!");
}

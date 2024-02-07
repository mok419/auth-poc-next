import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

async function checkOtherSiteCookie(request: NextRequest) {
  const theme = request.cookies.get("session")?.value;
  console.log('hi');
  if (!theme) return NextResponse.json('<h2> A session cookie is required to access this page</h2>');
}


export async function middleware(request: NextRequest) {
  await updateSession(request);
  return checkOtherSiteCookie(request);
}


export const config = {
  matcher: ['/test-image.png'],
}
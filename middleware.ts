import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

async function checkOtherSiteCookie(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return NextResponse.json('<h2> A session cookie is required to access this page</h2>');

}


export async function middleware(request: NextRequest) {
  // await updateSession(request);
  return await checkOtherSiteCookie(request)
}

export const config = {
  matcher: ['/test-image.png'],
}
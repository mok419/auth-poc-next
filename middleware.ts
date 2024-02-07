import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

async function checkOtherSiteCookie(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value;
  console.log(theme)
  if (!theme) return NextResponse.json('<h2> A Theme cookie is required to access this page</h2>');
}


export async function middleware(request: NextRequest) {
  console.log('DO WE GO HERE?')
  await updateSession(request);
  return await checkOtherSiteCookie(request);
}

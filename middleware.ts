import { NextRequest } from "next/server";
import { updateSession } from "./lib";

async function checkOtherSiteCookie(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

}


export async function middleware(request: NextRequest) {
  // await updateSession(request);
  return await checkOtherSiteCookie(request)
}

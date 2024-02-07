import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

async function checkOtherSiteCookie(request: NextRequest) {
  const theme = request.cookies.get("session")?.value;
  console.log('hi');
  if (!theme) return NextResponse.json('<h2> A session cookie is required to access this page</h2>');
}


export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/test-image.png')) {
    await updateSession(request);
    return await checkOtherSiteCookie(request);
  } else {
  //   const res = NextResponse.next()
  // // add the CORS headers to the response
  // res.headers.append('Access-Control-Allow-Credentials', "true")
  // res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  // res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  // res.headers.append(
  //     'Access-Control-Allow-Headers',
  //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Set-Cookie'
  // )
  // return res;
  }
}


// export const config = {
//   matcher: ['/test-image.png'],
// }
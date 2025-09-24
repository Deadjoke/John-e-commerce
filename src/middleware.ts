//function will be executed between of any page and the response of it

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req : NextRequest) {
  const jwt= await getToken({req});
  console.log(jwt);
  if (jwt?.credientailToken) {
    return NextResponse.next();
  }
  
 return NextResponse.redirect(`${process.env.MY_DOMAIN}/login`);
}

export const config = {
    matcher:['/cart']
}
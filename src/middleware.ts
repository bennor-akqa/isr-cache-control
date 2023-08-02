import { NextResponse } from "next/server";

export default function middleware() {
    const response =  NextResponse.next();
    response.headers.set("cache-control", "private, max-age=300")
}
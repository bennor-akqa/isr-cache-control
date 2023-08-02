import { NextResponse } from "next/server";

export default function middleware() {
    const response =  NextResponse.next();
    response.headers.delete("cache-control");
    response.headers.set("cache-control", "private, max-age=300")
    response.headers.set("x-cache-control-debug", "private, max-age=300");
    return response
}
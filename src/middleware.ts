import { auth } from "@/configs/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname === "/profile") {
    const newUrl = new URL("/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
export const config = {
  matcher: ["/profile", "/protected/:path*", "/post/newpost"],
};
export { auth as middleware } from "@/configs/auth";

/*export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/profile", "/protected/:path*", "/post/newpost"],
};*/

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Used to protect all routes, exclduing ones passed in the array
const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up"]);

// Used to protect routes specified in the array
// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

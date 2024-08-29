import { NextResponse } from "next/server";
import { getAuthUser } from "./app/actions";

const publicRoutes = ["/login", "/signup"];

const routes = [
    { path: "/dashboard", requiredRoles: ["admin", "mentor"] },
    { path: "/settings", requiredRoles: ["admin", "mentor"] },
    {
        pathRegex: /^\/settings\/(account|reset-password|appearance|transactions|enrollments)$/,
        requiredRoles: ["student"],
    },
    { path: "/access-denied", requiredRoles: ["mentor", "admin", "student"] },
    { path: "/courses", requiredRoles: [] },
    { pathRegex: /^\/courses\/\d+$/, requiredRoles: [] },
    { pathRegex: /^\/courses\/\d+\/\d+\/\d+\/lesson$/, requiredRoles: ["student"] },
];

const selectUrl = (role) => {
    switch (role) {
        case "student":
            return "/courses";
        case "mentor":
        case "admin":
            return "/dashboard";
        default:
            return "/";
    }
};

const findMatchingRoute = (path_name) => {
    return routes.find((route) => route.path === path_name || (route.pathRegex && route.pathRegex.test(path_name)));
};

export async function middleware(request) {
    const sessionToken = request.cookies.get("auth_token")?.value;
    const isLoggedIn = Boolean(sessionToken);
    const user = isLoggedIn ? await getAuthUser() : null;
    const pathname = request.nextUrl.pathname;
    const matchingRoute = findMatchingRoute(pathname);

    // Handle public routes with regex matching
    const isPublicRoute = publicRoutes.some((publicRoute) => {
        if (publicRoute instanceof RegExp) {
            return publicRoute.test(pathname);
        }
        return publicRoute === pathname;
    });

    if (isPublicRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(selectUrl(user.base_role), request.url));
        }
        return NextResponse.next();
    }

    // Handle non-public routes
    if (!isLoggedIn) {
        if (matchingRoute) {
            if (matchingRoute.requiredRoles.length <= 0) {
                return NextResponse.next();
            }
        }
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.set("redirect_to", pathname);
        return response;
    }

    if (pathname === "/") {
        return NextResponse.redirect(new URL(selectUrl(user.base_role), request.url));
    }

    if (pathname === "/settings") {
        return NextResponse.redirect(new URL("/settings/account", request.url));
    }

    if (matchingRoute) {
        if (matchingRoute.requiredRoles.length <= 0) {
            return NextResponse.next();
        }
        if (!matchingRoute.requiredRoles.includes(user.base_role)) {
            return NextResponse.redirect(new URL("/access-denied", request.url));
        }
    }

    if (!matchingRoute) {
        return NextResponse.redirect(new URL("/not-found", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.ico$).*)"],
};

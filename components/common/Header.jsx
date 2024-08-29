"use client";

/* eslint-disable import/no-unresolved */
import { cn } from "@/lib/utils";
import { show_toast } from "@/utils/show_toast";
import {
    IconKey,
    IconLogin,
    IconLogout,
    IconMoonStars,
    IconSettingsCog,
    IconUser,
    IconUserCircle,
} from "@tabler/icons-react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Breadcrumb from "../Breadcrumb";
import CodenixxLogo from "../CodenixxLogo";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function Header({ pathname, className = "" }) {
    const router = useRouter();
    const auth = useSelector((state) => state.auth);

    const logout = async () => {
        show_toast("success", "Successfully Logged Out");
        setTimeout(() => {
            Cookies.remove("auth_token");
            Cookies.remove("user");
            Cookies.remove("redirect_to");
            router.push("/login");
        }, 500);
    };

    console.log(pathname);

    return (
        <div
            className={cn(
                "z-10 flex h-[66px] w-full items-center justify-between gap-4 border-b bg-base-0 px-2 shadow",
                className
            )}
        >
            <div>
                {["admin", "mentor"].includes(auth.user?.base_role) ? (
                    <Breadcrumb pathname={pathname} />
                ) : (
                    <CodenixxLogo className="h-[50px] w-[120px]" />
                )}
            </div>
            <div className="gap- flex items-center gap-2">
                <div className="mt-1">
                    <ul className="flex items-center gap-2">
                        <li className={`text-base-400 hover:text-base-500`}>
                            <Link
                                href={`/`}
                                className={
                                    pathname.startsWith("/courses")
                                        ? "text-base-500"
                                        : "text-base-400 hover:text-base-500"
                                }
                            >
                                Courses
                            </Link>
                        </li>
                        <li className={`text-base-400 hover:text-base-500`}>
                            <Link
                                href={`/dashboard`}
                                className={
                                    pathname.startsWith("/dashboard")
                                        ? "text-base-500"
                                        : "text-base-400 hover:text-base-500"
                                }
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
                {auth.user?.base_role === "student" ? (
                    <div className="flex items-center gap-4">
                        <h5 className="mt-1 text-base-500">Point: 100 </h5>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full p-0">
                                    <IconUserCircle size={60} className="text-base-400" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <Link href={"/settings/account"}>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <div className="flex items-center justify-start gap-2">
                                            <IconUser size={18} />
                                            <span>Account</span>
                                        </div>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href={"/settings/reset-password"}>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <div className="flex items-center justify-start gap-2">
                                            <IconKey size={18} />
                                            <span>Reset Password</span>
                                        </div>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href={"/settings/appearance"}>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <div className="flex items-center justify-start gap-2">
                                            <IconMoonStars size={18} />
                                            <span>Appearance</span>
                                        </div>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href={"/settings/customize-setting"}>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <div className="flex items-center justify-start gap-2">
                                            <IconSettingsCog size={18} />
                                            <span>Customize Setting</span>
                                        </div>
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem onClick={logout} className="cursor-pointer">
                                    <div className="flex items-center justify-start gap-2">
                                        <IconLogout size={18} />
                                        <span>Logout</span>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Button>
                        <Link className="flex items-center gap-1" href={`/login`}>
                            <IconLogin size={20} className="" />
                            <span>Login</span>
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}

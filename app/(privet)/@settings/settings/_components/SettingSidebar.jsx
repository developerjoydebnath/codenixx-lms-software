"use client";

import { settingsMenus } from "@/constants/menues";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingSidebar({ className = "" }) {
    const pathname = usePathname();
    return (
        <div className={cn("mt-2", className)}>
            <div>
                <h5 className="mb-1 text-sm text-base-300">Settings</h5>
            </div>
            <ul>
                {settingsMenus.map((menu) => (
                    <li className="mb-1 rounded-md" key={menu.id}>
                        <Link replace={true} prefetch={false} href={menu.path}>
                            <div
                                className={`flex items-center justify-start gap-2 rounded-md px-2.5 py-2.5 transition-all duration-200 ease-in ${pathname === menu.path ? "bg-primary text-base-0 dark:text-foreground" : "text-base-400 hover:bg-base-300/20 hover:text-foreground dark:hover:bg-base-50/30"}`}
                            >
                                <span>{menu.icon()}</span> <span>{menu.name}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

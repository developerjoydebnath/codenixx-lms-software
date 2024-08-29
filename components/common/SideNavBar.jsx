"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Menus } from "@/constants/menues";
import { cn } from "@/lib/utils";
import { checkAccessPermission } from "@/utils/checkAccessPermission";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavFooter from "./NavFooter";
import NavHeader from "./NavHeader";

const SideNavBar = React.forwardRef(({ className, setIsOpen }, ref) => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeMenuId, setActiveMenuId] = React.useState(null);

    // menu items import
    const menus = Menus();

    // side nav close handler
    const handleSideNabBarClose = () => {
        const timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 150);

        return () => clearTimeout(timeoutId);
    };

    // sub menu open close handler
    const handleMenuOpenClose = (menu) => {
        const id = menu?.id;

        if (!menu?.subMenu) {
            handleSideNabBarClose();
        }

        if (id === activeMenuId) {
            setIsMenuOpen(false);
            setActiveMenuId(null);
        } else {
            setIsMenuOpen(true);
            setActiveMenuId(id);
        }
    };

    return (
        <div ref={ref} className={cn("z-30 h-screen w-fit min-w-[250px]", className)}>
            <div className="flex h-full w-full flex-col">
                <NavHeader />
                <ScrollArea className="h-full border-r bg-base-0 px-2 py-2">
                    <div className="">
                        <ul className={cn("flex h-fit flex-col gap-1 bg-base-0", "")}>
                            {menus.map(
                                (menu) =>
                                    (checkAccessPermission({
                                        base_role: "admin",
                                        permissions: [],
                                        required_permissions: menu.requirePermissions,
                                    }) ||
                                        menu.path === "/dashboard") && (
                                        <div key={menu.id}>
                                            <NavLink
                                                active={pathname?.split("/").find((d) => menu.path.split("/")[1] === d)}
                                                open={activeMenuId === menu.id && isMenuOpen}
                                                hasSubMenu={menu?.subMenu?.length > 0}
                                                onClick={() => handleMenuOpenClose(menu)}
                                                path={menu.path}
                                                icon={menu.icon()}
                                            >
                                                {menu.name}
                                            </NavLink>

                                            {menu?.subMenu && (
                                                <div
                                                    className={`mt-1 flex flex-col gap-1 overflow-hidden bg-base-0 transition-all duration-200 ease-out ${
                                                        activeMenuId === menu.id && isMenuOpen
                                                            ? "h-fit max-h-full"
                                                            : "h-0 max-h-0"
                                                    }`}
                                                >
                                                    {menu?.subMenu.map(
                                                        (sub) =>
                                                            checkAccessPermission({
                                                                base_role: "admin",
                                                                permissions: [],
                                                                required_permissions: menu.requirePermissions,
                                                            }) && (
                                                                <SubNavLink
                                                                    active={pathname === sub.path}
                                                                    onClick={handleSideNabBarClose}
                                                                    subPath={sub.path}
                                                                    className="ml-5"
                                                                    key={sub.id}
                                                                    icon={sub.icon()}
                                                                >
                                                                    {sub.name}
                                                                </SubNavLink>
                                                            )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                            )}
                        </ul>
                    </div>
                </ScrollArea>
                <NavFooter />
            </div>
        </div>
    );
});

export default SideNavBar;

const NavLink = ({ children, icon, className, onClick, active, open, hasSubMenu, path }) =>
    hasSubMenu ? (
        <li
            onClick={onClick && onClick}
            className={cn(
                `flex cursor-pointer items-center justify-between gap-2 rounded-md px-2.5 py-2.5 transition-all duration-200 ease-in ${
                    active
                        ? "bg-primary text-base-0 dark:text-foreground"
                        : "text-base-400 hover:bg-base-300/20 hover:text-foreground dark:hover:bg-base-50/30"
                }`,
                className
            )}
        >
            <span className="flex items-center gap-2">
                {icon}
                <h5 className="mt-0.5 text-base font-medium">{children}</h5>
            </span>

            <IconChevronDown
                className={`transition-all duration-100 ease-linear ${open ? "rotate-180" : ""}`}
                size={20}
            />
        </li>
    ) : (
        <Link href={path}>
            <li
                onClick={onClick && onClick}
                className={cn(
                    `flex cursor-pointer items-center justify-between gap-2 rounded-md px-2.5 py-2.5 transition-all duration-200 ease-in ${
                        active
                            ? "bg-primary text-base-0 dark:text-foreground"
                            : "text-base-400 hover:bg-base-300/20 hover:text-foreground dark:hover:bg-base-50/30"
                    }`,
                    className
                )}
            >
                <span className="flex items-center gap-2">
                    {icon}
                    <h5 className="mt-0.5 text-base font-medium">{children}</h5>
                </span>
            </li>
        </Link>
    );

const SubNavLink = ({ children, icon, className, active, subPath, onClick }) => {
    return (
        <Link href={subPath}>
            <li
                onClick={onClick && onClick}
                className={cn(
                    `flex cursor-pointer items-center justify-start gap-2 rounded-md px-2.5 py-2.5 transition-all duration-200 ease-in ${
                        active
                            ? "bg-primary/85 text-base-0 dark:text-foreground"
                            : "text-base-400 hover:bg-base-300/20 hover:text-foreground dark:hover:bg-base-50/30"
                    }`,
                    className
                )}
            >
                {icon}
                <h5 className="text-base font-medium">{children}</h5>
            </li>
        </Link>
    );
};

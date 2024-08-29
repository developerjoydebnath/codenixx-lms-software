"use client";

import SideNavBar from "@/components/common/SideNavBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { handleOutsideClick } from "@/utils/handleOutsideClick";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../common/Header";
import HiddenSideNavBar from "../common/HiddenSideNavBar";

export default function PrivetLayout({ children }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef(null);
    const pathname = usePathname();

    handleOutsideClick(ref, setIsOpen);

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <SideNavBar navRef={ref} className="hidden lg:block" setIsOpen={setIsOpen} />

            <HiddenSideNavBar navRef={ref} setIsOpen={setIsOpen} isOpen={isOpen} />

            <div className="flex h-full w-full flex-col">
                <Header pathname={pathname} />

                <ScrollArea className="h-full w-full">
                    <div className="p-2 sm:p-4">{children}</div>
                </ScrollArea>
            </div>
        </div>
    );
}

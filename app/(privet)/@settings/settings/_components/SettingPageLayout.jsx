"use client";

import { Separator } from "@/components/ui/separator";
import { handleOutsideClick } from "@/utils/handleOutsideClick";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import SettingSidebar from "./SettingSidebar";

export default function SettingPageLayout({ children, className = "", title = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const settingRef = useRef(null);

    handleOutsideClick(settingRef, setIsOpen);

    return (
        <div>
            <div className="sticky top-0 z-20 mb-2 bg-base-0 px-3 pt-3 text-base-500 sm:px-4 sm:pt-4">
                <div className="flex items-center justify-between pb-2 sm:pb-3">
                    <div className="flex gap-3">
                        <button onClick={() => setIsOpen(!isOpen)} className="xmd:hidden" type="button">
                            <IconMenu2 size={24} className="text-base-500" />
                        </button>
                        <h4 className="text-base font-medium sm:text-lg">{title}</h4>
                    </div>

                    <button onClick={() => router.back()}>
                        <div className="rounded bg-body p-1 hover:bg-body/70 active:bg-body">
                            <IconX className="text-base-500" size={16} />
                        </div>
                    </button>
                </div>
                <Separator className="" />
            </div>
            <div className="p-3 pt-0 sm:p-4 sm:pt-0">
                <div>{children}</div>
            </div>
            <div
                ref={settingRef}
                className={`absolute right-full top-0 z-40 h-full w-[220px] rounded-r-md bg-base-0 shadow transition-all duration-200 ease-in-out xmd:hidden ${
                    isOpen ? "translate-x-full" : ""
                }`}
            >
                <SettingSidebar className="mx-2" />
            </div>
            <div
                className={`absolute left-0 top-0 z-30 h-full w-full bg-black/20 transition-all duration-200 ease-in-out fade-in-0 xmd:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            ></div>
        </div>
    );
}

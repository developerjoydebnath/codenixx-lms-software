"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import SettingSidebar from "./_components/SettingSidebar";

export default function Layout({ children }) {
    const router = useRouter();

    const closeModal = () => router.back();
    return (
        <div className="fixed left-0 top-0 z-50 grid h-full w-full place-items-center px-2">
            {/* overlay */}
            <div
                className="fixed left-0 top-0 -z-10 h-screen w-screen bg-[#181c22]/70 animate-in fade-in-0 dark:bg-[#ffffff3a]"
                onClick={closeModal}
                onKeyUp={closeModal}
            />
            {/* content */}
            <div className="relative flex h-[calc(100vh-180px)] w-full max-w-[1080px] items-start rounded-xl bg-body animate-in fade-in zoom-in-95">
                {/* sidebar */}
                <div className="hidden w-fit min-w-[220px] p-4 pr-0 xmd:block">
                    <div className="flex items-center justify-start gap-1">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <SettingSidebar />
                </div>
                {/* content */}
                <div className="m-3 h-[calc(100vh-204px)] flex-1 overflow-hidden rounded-lg bg-base-0 sm:m-4 sm:h-[calc(100vh-212px)] sm:rounded-xl">
                    <ScrollArea className="h-full">
                        <div className="rounded-xl">{children}</div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}

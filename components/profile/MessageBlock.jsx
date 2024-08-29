"use client";

import { cn } from "@/lib/utils";
import { IconLoader2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

export default function MessageBlock({ className = "", uid }) {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <ScrollArea className={cn("h-[300px] rounded border", className)}>
            {loading ? (
                <div className="flex h-[300px] w-full items-center justify-center py-5">
                    <IconLoader2 size={30} className="animate-spin-slow text-base-400" />
                </div>
            ) : messages.length > 0 ? (
                <>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </>
            ) : (
                <div>
                    <h4 className="flex h-[300px] w-full items-center justify-center text-sm text-base-400">
                        No Message To Show
                    </h4>
                </div>
            )}
        </ScrollArea>
    );
}

const Message = ({ title = "", body = "" }) => {
    return (
        <div className="m-2 rounded bg-base-100 p-2 dark:bg-body/70">
            <h5 className="text-sm text-base-500">Welcome</h5>
            <p className="text-xs tracking-wider text-base-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ullam itaque distinctio molestiae
                aliquam quam animi molestias libero cumque temporibus.
            </p>
        </div>
    );
};

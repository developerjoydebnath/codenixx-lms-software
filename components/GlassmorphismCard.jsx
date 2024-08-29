"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function GlassmorphismCard({ children, className = "" }) {
    const { theme } = useTheme();
    return (
        <div className={cn(`${theme === "dark" ? "glassmorphism-dark-2" : "glassmorphism-2"}`, className)}>
            {children}
        </div>
    );
}

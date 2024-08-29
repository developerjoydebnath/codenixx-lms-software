"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });

export default function LocationOnMap({ className = "", position = [] }) {
    return (
        <div className={cn("h-[400px] w-full", className)}>
            <Map />
        </div>
    );
}

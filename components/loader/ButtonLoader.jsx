import { cn } from "@/lib/utils";

export default function ButtonLoader({ className = "" }) {
    return <div className={cn("h-10 w-24 animate-pulse rounded-md bg-secondary", className)}></div>;
}

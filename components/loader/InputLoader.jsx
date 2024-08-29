import { cn } from "@/lib/utils";

export default function InputLoader({ className = "" }) {
    return (
        <div className={cn("", className)}>
            <div className="mb-1.5 h-4 w-32 animate-pulse rounded bg-secondary"></div>
            <div className="h-10 w-full max-w-[600px] animate-pulse rounded-md bg-secondary"></div>
        </div>
    );
}

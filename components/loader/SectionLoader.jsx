import { cn } from "@/lib/utils";

export default function SectionLoader({ children, className = "", childClass = "" }) {
    return (
        <div className={cn("", className)}>
            <div className="h-10 w-full animate-pulse bg-secondary"></div>
            <div className={cn("mb-5 mt-2", childClass)}>{children}</div>
        </div>
    );
}

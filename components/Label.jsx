import { cn } from "@/lib/utils";

export default function Label({ children, className = "" }) {
    return <span className={cn("mb-0.5 text-xs font-medium text-base-400", className)}>{children}</span>;
}

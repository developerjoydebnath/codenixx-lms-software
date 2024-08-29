import { cn } from "@/lib/utils";

export default function FormFooterLoader({ children, className = "" }) {
    return <div className={cn("mb-2 mt-2 flex items-center justify-center gap-3", className)}>{children}</div>;
}

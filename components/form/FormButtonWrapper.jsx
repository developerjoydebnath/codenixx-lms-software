import { cn } from "@/lib/utils";

export default function FormButtonWrapper({ children, className = "" }) {
    return <div className={cn("mb-2 mt-5 flex items-center justify-center gap-3", className)}>{children}</div>;
}

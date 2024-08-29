import { cn } from "@/lib/utils";

export default function PageLayout({ children, className = "" }) {
    return <section className={cn("grid grid-cols-1 gap-4", className)}>{children}</section>;
}

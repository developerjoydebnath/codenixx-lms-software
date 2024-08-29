import { cn } from "@/lib/utils";

export default function SectionLayout({ children, className = "" }) {
    return <section className={cn("rounded-md bg-base-0 p-2 shadow-sm sm:p-4", className)}>{children}</section>;
}

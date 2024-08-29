import { cn } from "@/lib/utils";

export default function ProfileBody({ children, className = "" }) {
    return <div className={cn("grid w-full grid-cols-12 gap-4", className)}>{children}</div>;
}

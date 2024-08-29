import { cn } from "@/lib/utils";

export default function FormSectionWrapper({
    children,
    className = "",
    titleClass = "",
    wrapperClass = "",
    title = "",
}) {
    return (
        <div className={cn("mb-5", wrapperClass)}>
            <h4 className={cn("mb-2 bg-primary px-2 py-2 font-medium text-base-0", titleClass)}>{title}</h4>

            <div className={cn("", className)}>{children}</div>
        </div>
    );
}

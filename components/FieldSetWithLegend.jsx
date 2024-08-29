import { cn } from "@/lib/utils";

export default function FieldSetWithLegend({ children, title = "", className = "" }) {
    return (
        <fieldset className={cn("h-fit rounded-md border px-2 pb-2 pt-0 sm:px-4 sm:pb-4 sm:pt-1", className)}>
            <legend className="text-base font-medium text-base-400 sm:text-lg">{title}</legend>
            <div>{children}</div>
        </fieldset>
    );
}

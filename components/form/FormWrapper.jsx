import { cn } from "@/lib/utils";

export default function FormWrapper({ children, className = "", titleClass = "", title = "" }) {
    return (
        <div>
            <h2 className={cn("mb-3 text-center text-lg font-medium text-base-400 sm:text-xl md:text-2xl", titleClass)}>
                {title}
            </h2>
            <div className="rounded-lg bg-secondary p-2 sm:p-3">
                <div className="rounded-lg bg-base-0 px-2.5 py-2 sm:px-4">{children}</div>
            </div>
        </div>
    );
}

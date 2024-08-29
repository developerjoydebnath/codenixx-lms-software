import { cn } from "@/lib/utils";

const Tooltip = ({ children, title = "", className = "" }) => {
    return (
        <div className="group relative w-fit">
            {children}
            <div
                className={cn(
                    "absolute bottom-full left-1/2 mb-1 hidden min-w-fit -translate-x-1/2 whitespace-nowrap rounded bg-base-400 px-1.5 py-1 text-xs text-base-0 group-hover:block",
                    className
                )}
            >
                {title}
            </div>
        </div>
    );
};

export default Tooltip;

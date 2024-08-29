import { cn } from "@/lib/utils";

export default function FormLayoutLoader({ children, className = "", titleClass = "", title = "" }) {
    return (
        <div>
            <div className="flex justify-center">
                <div
                    className={cn("mb-3 h-[28px] w-[335px] animate-pulse rounded bg-secondary md:h-[32px]", titleClass)}
                ></div>
            </div>
            <div className="animate-pulse rounded-lg bg-secondary p-2 sm:p-3">
                <div className="rounded-lg bg-base-0 px-2.5 py-2 sm:px-4">{children}</div>
            </div>
        </div>
    );
}

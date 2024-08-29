import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function DialogBody({ children, className = "", title = "" }) {
    return (
        <DialogContent className={cn("gap-0 border-none p-0 sm:max-w-[525px] sm:p-0", className)}>
            <DialogHeader className="rounded-t-lg bg-primary py-3">
                <DialogTitle className="text-center text-xl font-medium text-base-0">{title}</DialogTitle>
            </DialogHeader>
            <div className="p-2 sm:p-3">
                <div className="rounded-lg bg-body p-2 sm:p-3">
                    <div className="rounded-lg bg-base-0 p-2 sm:p-3">{children}</div>
                </div>
            </div>
        </DialogContent>
    );
}

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";

const TableFilterLayout = ({ children, className, handler, hideButton = false }) => {
    return (
        <div
            className={cn("mb-3 hidden grid-cols-3 items-end gap-3 md:grid-cols-4 lg:grid 3xl:grid-cols-6", className)}
        >
            {children}
            <div className={hideButton ? "hidden" : ""}>
                <Button type="button" className="flex items-center gap-1" variant="secondary" onClick={handler}>
                    <IconX size={16} className="mb-0.5" />
                    <span>Clear</span>
                </Button>
            </div>
        </div>
    );
};

export default TableFilterLayout;

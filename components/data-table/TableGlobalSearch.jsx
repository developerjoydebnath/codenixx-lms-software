import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import React from "react";

function TableGlobalSearch({ value: initialValue, onChange, debounce = 500, className, ...props }) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);
    return (
        <div className="group relative h-fit w-full max-w-[250px]">
            <Input
                {...props}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={cn("group-hover:pr-10", className)}
            />
            <div className="absolute right-0 top-0 hidden h-full w-9 items-center justify-center bg-transparent group-hover:flex">
                <div
                    className="cursor-pointer rounded bg-secondary/50 p-0.5 hover:bg-secondary active:bg-secondary/80"
                    onClick={(e) => setValue("")}
                >
                    <IconX size={16} className="text-base-400/80" />
                </div>
            </div>
        </div>
    );
}

export default TableGlobalSearch;

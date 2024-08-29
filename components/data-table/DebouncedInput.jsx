import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

function DebouncedInput({ value: initialValue, onChange, debounce = 500, className, ...props }) {
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
        <Input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={cn("h-6 rounded border bg-base-0 px-1.5 text-xs font-normal", className)}
        />
    );
}

export default DebouncedInput;

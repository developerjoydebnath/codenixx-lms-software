import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-0 transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary/90 text-primary-foreground hover:bg-primary active:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "hover:bg-accent bg-accent/90 active:bg-accent/80 hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                icon_info: "bg-info/10 hover:bg-info/20 active:bg-info/10 px-1.5 py-0 text-info",
                icon_destructive:
                    "bg-destructive/15 px-1.5 py-0 hover:bg-destructive/20 active:bg-destructive/15 text-destructive",
                icon_secondary: "bg-base-400/10 px-1.5 py-0 hover:bg-base-400/20 active:bg-base-400/10 text-base-400",
                icon_success: "bg-green-500/10 px-1.5 py-0 hover:bg-green-500/20 active:bg-green-500/10 text-green-500",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };

import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";


export const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
    return (
        <span 
            className={cn(
                "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.6 text-primary rounded-sm",
                className
            )} 
            {...props} 
        />
    );
};
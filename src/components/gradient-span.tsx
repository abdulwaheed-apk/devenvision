import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function GradientSpan({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <span className={cn('text-transparent bg-clip-text bg-gradient-to-b from-[#1D91FF] to-[#5EFFBB]', className)}>
            {children}
        </span>
    )
}
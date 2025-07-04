import * as React from 'react'
import { cn } from "@/lib/utils";

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    title: string;
    href: string;
    children?: React.ReactNode;
}

const NavLink = ({ href, children, className = '' }: {
    href: string,
    children: Readonly<React.ReactNode>,
    className?: string;
}) => (
    <a href={href} className={cn("text-[22px] font-normal capitalize text-[#051634] hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#1D91FF] hover:to-[#5EFFBB] transition-colors px-3 py-2 rounded-md", className)}>
        {children}
    </a>
);

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <a
                ref={ref}
                href={href}
                className={cn(
                    "block select-none space-y-1.5 max-w-64 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F2F4F7] focus:bg-[#F2F4F7]",
                    className
                )}
                {...props}
            >
                <div className="text-base font-bold text-[#051634]">{title}</div>
                <p className="line-clamp-2 text-base font-normal leading-snug text-[#111]">
                    {children}
                </p>
            </a>
        </li>
    );
});

ListItem.displayName = "ListItem";

export { NavLink, ListItem }
"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Development Services",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Product Solutions",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Global Capacity Center",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Staff Augmentation",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Platforms",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Technologies",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

type Service = {
    title: string;
    href: string;
    sub?: {
        title: string;
        href: string;
        description: string
    }[]

}
const services: Service[] = [
    {
        title: "Development Services",
        href: "#",
        sub: [
            {
                title: 'Enterprise Software Development',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Artificial Intelligence Agents',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Cloud Development Services',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Application Modernization',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Ai Developments Services',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
        ]
    },
    {
        title: "Product Solutions",
        href: "#",
    },
    {
        title: "Global Capacity Center",
        href: "#",
        sub: [
            {
                title: 'Enterprise Software Development',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Artificial Intelligence Agents',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Cloud Development Services',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Application Modernization',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                title: 'Ai Developments Services',
                href: '#',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
        ]
    },
    {
        title: "Staff Augmentation",
        href: "#",
    },
    {
        title: "Platforms",
        href: "#",
    },
    {
        title: "Technologies",
        href: "#",
    },
]

const navItems: { title: string; href: string; }[] = [
    {
        title: 'Portfolio',
        href: '#portfolio'
    },
    {
        title: 'About U',
        href: '#about-us'
    },
    {
        title: 'Contact Us',
        href: '#contact-us'
    }
]

export function Menu() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'hover:bg-transparent')}>
                        <Link href="/"
                            className={'text-base font-normal text-[#051634] transition-all duration-300 hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#1D91FF] hover:to-[#5EFFBB]'}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {navItems.map(item => (
                    <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'hover:bg-transparent')}>
                            <Link href={item.href}
                                className={'text-base font-normal text-[#051634] transition-all duration-300 hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#1D91FF] hover:to-[#5EFFBB]'}
                            >{item.title}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink className="hover:bg-transparent" asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type SubService = {
  title: string;
  href: string;
  description: string;
};

type Service = {
  title: string;
  href: string;
  sub?: SubService[];
};

const services: Service[] = [
  {
    title: "Development Services",
    href: "#",
    sub: [
      {
        title: "Enterprise Software Development",
        href: "#",
        description: "Custom software solutions tailored to your large-scale business needs and goals.",
      },
      {
        title: "Artificial Intelligence Agents",
        href: "#",
        description: "Develop intelligent agents to automate tasks, analyze data, and enhance user interaction.",
      },
      {
        title: "Cloud Development Services",
        href: "#",
        description: "Leverage the power of the cloud with our scalable and secure development services.",
      },
      {
        title: "Application Modernization",
        href: "#",
        description: "Update your legacy systems to modern, efficient, and maintainable applications.",
      },
      {
        title: "AI Development Services",
        href: "#",
        description: "Full-cycle AI development to build innovative and intelligent business solutions.",
      },
    ],
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
        title: "Dedicated Development Teams",
        href: "#",
        description: "Build a dedicated team of experts to act as an extension of your in-house resources.",
      },
      {
        title: "Offshore Development Center",
        href: "#",
        description: "Establish a cost-effective offshore center for your development and operational needs.",
      },
      {
        title: "Managed IT Services",
        href: "#",
        description: "Comprehensive IT management to ensure your infrastructure is reliable and efficient.",
      },
      {
        title: "Quality Assurance and Testing",
        href: "#",
        description: "Ensure your products are bug-free and performant with our rigorous QA services.",
      },
    ],
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
];

const navItems: { title: string; href: string; }[] = [
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "About Us",
    href: "#about-us",
  },
  {
    title: "Contact Us",
    href: "#contact-us",
  },
];


// --- UI COMPONENTS ---
// These would typically be in your components/ui folder from shadcn/ui

// Helper for combining class names

// A custom Link component to be used within the navigation
const NavLink = ({ href, children, className = '' }: {
  href: string,
  children: Readonly<React.ReactNode>,
  className?: string;
}) => (
  <a href={href} className={cn("text-[22px] font-normal capitalize text-[#051634] hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#1D91FF] hover:to-[#5EFFBB] transition-colors px-3 py-2 rounded-md", className)}>
    {children}
  </a>
);

// The ListItem component for dropdowns, styled similarly to shadcn/ui examples
const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
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


// --- MAIN NAVIGATION COMPONENT ---

function ServicesMegaMenu() {
  // State to track which service is being hovered in the mega menu
  const [activeService, setActiveService] = useState<Service | null>(services.find(s => s.sub) || null);

  return (
    <div className="absolute top-full left-0 mt-6 w-auto">
      <div className="bg-[#f2f4f7] rounded-lg border border-transparent overflow-hidden">
        <div className="flex">
          {/* Left Panel: List of all services */}
          <div className="w-80 border-e border-slate-200/80 p-2">
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service.title} onMouseEnter={() => setActiveService(service)}>
                  <a
                    href={service.href}
                    className={cn(
                      "block w-full text-left p-6 rounded-lg transition-colors font-bold text-xl",
                      activeService?.title === service.title ? "bg-white text-slate-900" : "hover:bg-slate-50 text-slate-700"
                    )}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Shows sub-services for the active service */}
          <div className="w-auto min-w-max max-w-[44rem] m-2 p-6 bg-white rounded-lg">
            {activeService && activeService.sub ? (
              <div className='w-auto'>
                {/* <h3 className="text-base hidden font-bold ">{activeService.title}</h3> */}
                <ul className="grid grid-cols-2 gap-6">
                  {activeService.sub.map((subItem) => (
                    <ListItem key={subItem.title} href={subItem.href} title={subItem.title}>
                      {subItem.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-800">{activeService?.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {activeService ? "This service doesn't have detailed sub-categories." : "Hover over a service to see details."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MainNav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:items-center md:space-x-2">
          <NavLink href="#">Home</NavLink>

          <div className="group relative">
            <button className="text-[22px] font-normal capitalize text-[#051634] hover:font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#1D91FF] hover:to-[#5EFFBB] transition-colors flex items-center group">
              Services
              <ChevronDown className="ms-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ServicesMegaMenu />
            </div>
          </div>

          {navItems.map((item) => (
            <NavLink key={item.title} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>

        <Sheet>
          <SheetTrigger
            className='lg:hidden'>
            <span className="sr-only">Open main menu</span>
            <Menu onClick={() => setMobileMenuOpen(true)} className="block h-6 w-6 -me-4" />
          </SheetTrigger>
          <SheetContent className='lg:hidden bg-[#f2f4f7] px-4 py-10'>
            <SheetTitle className='sr-only'>Menu for small screens</SheetTitle>
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-2">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink href="#" className="block !text-sm !p-4 !rounded-lg hover:!bg-white">Home</NavLink>
                  {/* You would likely want a simpler accordion-style menu for services on mobile */}
                  <details className="group">
                    <summary className="flex items-center justify-between w-full p-4 !rounded-lg hover:!bg-white text-sm font-medium text-[#051634] cursor-pointer">
                      Services
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="pl-4 mt-1 space-y-1 !p-4 !rounded-lg !bg-white">
                      {services.map(service => (
                        <NavLink key={service.title} href={service.href} className="block !text-sm !p-4 !rounded-lg hover:!bg-[#f2f4f7]">{service.title}</NavLink>
                      ))}
                    </div>
                  </details>
                  {navItems.map((item) => (
                    <NavLink key={item.title} href={item.href} className="block !text-sm !p-4 !rounded-lg hover:!bg-white">
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>

      </div>

      {/* Was here */}

    </nav>
  );
}

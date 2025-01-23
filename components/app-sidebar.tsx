"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  LayoutDashboard,
  Users,
  Settings,
  ShoppingCart,
  Box,
  BarChart3,
} from "lucide-react"

interface SideNavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  submenu?: boolean
  subMenuItems?: { title: string; href: string }[]
}

const sidebarNavItems: SideNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
    submenu: true,
    subMenuItems: [
      {
        title: "All Users",
        href: "/users",
      },
      {
        title: "Add User",
        href: "/users/add",
      },
      {
        title: "Roles",
        href: "/users/roles",
      },
    ],
  },
  {
    title: "Products",
    href: "/products",
    icon: Box,
    submenu: true,
    subMenuItems: [
      {
        title: "All Products",
        href: "/products",
      },
      {
        title: "Add Product",
        href: "/products/add",
      },
      {
        title: "Categories",
        href: "/products/categories",
      },
    ],
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <span className="font-semibold">Admin Dashboard</span>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {sidebarNavItems.map((item, index) => {
            const Icon = item.icon
            return item.submenu ? (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={item.title} className="border-none">
                  <AccordionTrigger className="flex items-center gap-x-2 p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-1 pl-6">
                      {item.subMenuItems?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={cn(
                            "flex items-center gap-x-2 rounded-md p-2 text-slate-600 hover:bg-accent hover:text-accent-foreground",
                            pathname === subItem.href &&
                              "bg-accent text-accent-foreground"
                          )}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-x-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

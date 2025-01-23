"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Settings,
  ShoppingCart,
  Box,
  BarChart3,
  ChevronDown,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
    children: [
      { title: "All Users", href: "/users" },
      { title: "Add User", href: "/users/add" },
      { title: "Roles", href: "/users/roles" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    icon: Box,
    children: [
      { title: "All Products", href: "/products" },
      { title: "Add Product", href: "/products/add" },
      { title: "Categories", href: "/products/categories" },
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
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed left-4 top-3 z-40"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SheetHeader className="p-5 border-b">
            <SheetTitle>Dashboard</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 p-4">
            <NavigationItems items={navItems} pathname={pathname} />
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 border-r bg-background">
        <div className="p-5 border-b">
          <h2 className="font-semibold">Dashboard</h2>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <NavigationItems items={navItems} pathname={pathname} />
        </nav>
      </div>
    </>
  )
}

function NavigationItems({ 
  items, 
  pathname 
}: { 
  items: NavItem[]
  pathname: string 
}) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        const isActiveGroup = item.children?.some(
          (child) => child.href === pathname
        )

        if (item.children) {
          return (
            <Collapsible key={index} defaultOpen={isActiveGroup}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between",
                    (isActive || isActiveGroup) && "bg-accent"
                  )}
                >
                  <span className="flex items-center">
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 mt-1 space-y-1">
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href}
                    className={cn(
                      "flex items-center py-2 px-3 text-sm rounded-md hover:bg-accent",
                      pathname === child.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          )
        }

        return (
          <Link key={index} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                isActive && "bg-accent"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}

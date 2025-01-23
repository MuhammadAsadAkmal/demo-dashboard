"use client"

import { Bell, Search, User, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Notification {
  id: number
  title: string
  description: string
  time: string
  read: boolean
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "New Order",
    description: "You have received a new order #1234",
    time: "5 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Payment Received",
    description: "Payment received for order #1234",
    time: "1 hour ago",
    read: false,
  },
  // Add more notifications as needed
]

export function TopBar() {
  const [unreadCount, setUnreadCount] = useState(2)

  return (
    <div className="flex h-16 items-center border-b px-4 md:px-6">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-full max-w-[600px]">
          {/* <Search className="  absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " /> */}
          <Input
            type="search"
            placeholder="Search..."
            className="w-full bg-background pl-8 md:w-[300px] lg:w-[600px]"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {unreadCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>You have {unreadCount} unread notifications</SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`rounded-lg border p-4 ${
                    !notification.read ? "bg-muted" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
} 
"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bell, Settings, User } from "lucide-react"
import { useEffect, useState } from "react"
import { LanguageSwitcher } from "./language-celector"
import { useTranslation } from "next-i18next"

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
  const { t } = useTranslation()  // Use the t function for translations
  const [unreadCount] = useState(2)
  const [direction, setDirection] = useState<string>(typeof window !== 'undefined' ? document.documentElement.dir : 'ltr')

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'dir') {
          setDirection(document.documentElement.dir)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`flex h-16 items-center border-b px-4 md:px-6 fixed top-0 ${direction === 'rtl' ? 'right-0 md:right-64 left-0' : 'left-0 md:left-64 right-0'} bg-background z-10`}
    >
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-full max-w-[600px]">
          <Input
            type="search"
            placeholder={t("search.placeholder")}  // Use translation for placeholder
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
              <SheetTitle>{t("notifications.title")}</SheetTitle>  {/* Use translation for title */}
              <SheetDescription>{t("notifications.description", { count: unreadCount })}</SheetDescription>  {/* Use translation for description */}
            </SheetHeader>
            <div className="mt-4 space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`rounded-lg border p-4 ${!notification.read ? "bg-muted" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
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
        <LanguageSwitcher />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{t("account.my_account")}</DropdownMenuLabel>  {/* Use translation for account label */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              {t("account.profile")}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              {t("account.settings")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              {t("account.logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

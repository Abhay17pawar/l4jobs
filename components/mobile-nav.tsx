"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] pr-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Navigation</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <MobileNavLink href="/" onNavigate={() => setOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/jobs" onNavigate={() => setOpen(false)}>
              Jobs
            </MobileNavLink>
            <MobileNavLink href="/companies" onNavigate={() => setOpen(false)}>
              Companies
            </MobileNavLink>
            <MobileNavLink href="/about" onNavigate={() => setOpen(false)}>
              About
            </MobileNavLink>
          </nav>
          <div className="mt-auto pt-6">
            <Button className="w-full gap-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white">
              <Download className="h-4 w-4" />
              <span>Get the App</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MobileNavLink({
  href,
  children,
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex items-center py-3 px-4 rounded-lg hover:bg-muted transition-colors text-foreground hover:text-rose-500"
    >
      {children}
    </Link>
  )
}

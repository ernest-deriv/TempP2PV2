"use client"

import Link from "next/link"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: "Hub", href: "https://hub.deriv.com/tradershub/home" },
    { name: "CFDs", href: "https://hub.deriv.com/tradershub/cfds" },
    { name: "Options", href: "https://hub.deriv.com/tradershub/options" },
    { name: "Wallets", href: "/" },
  ]

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                d
              </div>
            </Link>
            <nav className="ml-8 hidden md:flex">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex h-16 items-center border-b-2 px-1 text-sm font-medium",
                        item.name === "Wallets"
                          ? "border-red-500"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-gray-500 hover:text-gray-700">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}


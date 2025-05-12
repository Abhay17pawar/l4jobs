"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch, and ensure the theme persists on page refresh
  useEffect(() => {
    setTheme("light")
    setMounted(true)
  }, [])

  useEffect(() => {
    // Check if theme is already set in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // If no theme is stored, set default theme
      setTheme("light")
    }
  }, [setTheme])

  useEffect(() => {
    // Store the current theme in localStorage
    if (theme) {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 border rounded-full p-1 bg-muted/20">
        <div className="w-8 h-8 rounded-full bg-muted"></div>
        <div className="w-8 h-8 rounded-full bg-muted"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 border rounded-full p-1 bg-muted/20">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme("light")}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === "light" ? "bg-amber-400 text-amber-950" : "bg-transparent text-muted-foreground"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme("dark")}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === "dark" ? "bg-slate-700 text-slate-200" : "bg-transparent text-muted-foreground"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </motion.button>
    </div>
  )
}

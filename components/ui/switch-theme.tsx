'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from 'lucide-react' // MonitorIcon // Adjust the icon import path
import { cn } from '@/lib/utils'
import {
  motion,
  AnimatePresence,
  Transition,
  Variants,
  /* AnimatePresenceProps,*/
} from 'motion/react'

// Define a union type for the possible themes returned by the hook
//type ThemeOption = 'light' | 'dark' | 'system'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode = resolvedTheme === 'dark'
  const IconToDisplay = isDarkMode ? SunIcon : MoonIcon

  // Function to toggle between themes
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  const transition: Transition = { duration: 0.3 }

  return (
    <button
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 transition-colors duration-100 focus-visible:outline-2 dark:text-zinc-400',
      )}
      type='button'
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
    >
      <AnimatePresence
        mode='popLayout'
        initial={false}
      >
        <motion.div
          key={isDarkMode ? 'dark' : 'light'}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={transition}
          variants={motionVariants}
        >
          <IconToDisplay className='h-4 w-4' />
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeSwitch

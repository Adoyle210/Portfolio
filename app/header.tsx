'use client'

import { useState } from 'react' //useRef, useEffect
import { MenuIcon, XIcon, SparklesIcon } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'motion/react'
import { ThemeSwitch } from '@/components/ui/switch-theme'

// Define your navigation links
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#selected-projects', label: 'Projects' },
  { href: '#work-experience', label: 'Work Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#connect', label: 'Connect' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const motionVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  return (
    <header className='fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-zinc-950/80'>
      <div className='container-custom'>
        <nav className='flex items-center justify-between py-4'>
          {/* Logo */}
          <a
            href='#home'
            className='text-primary-500 dark:text-primary-400 text-xl font-bold'
          >
            <SparklesIcon />
            <span className='text-secondary-500'></span>
          </a>

          {/* Desktop Navigation Links (Visible on md and larger) */}
          <div className='hidden items-center space-x-7 md:flex'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='nav-link'
              >
                {link.label}
              </a>
            ))}
            <ThemeSwitch />
          </div>

          {/* Persistent controls (Theme Switch and Menu Button) */}
          <div className='flex items-center'>
            {/* The ThemeSwitch is now outside the responsive divs */}
            <ThemeSwitch />

            {/* Hamburger/Close Button (Visible only on smaller screens) */}
            <button
              onClick={toggleMobileMenu}
              className='ml-2 rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-200 md:hidden dark:text-neutral-300 dark:hover:bg-neutral-700'
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu (animates in/out, hidden on md and larger) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className='absolute top-full left-0 w-full bg-white py-4 shadow-md md:hidden dark:bg-zinc-950'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={motionVariants}
          >
            <div className='flex flex-col items-center space-y-4'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-lg font-bold text-neutral-800 dark:text-neutral-200'
                  onClick={closeMobileMenu} // Close menu on link click
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

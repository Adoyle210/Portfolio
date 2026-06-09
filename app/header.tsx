'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon, SparklesIcon } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'motion/react'
import { ThemeSwitch } from '@/components/ui/switch-theme'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Accordion } from '@/components/ui/accordion'
import { NavDropdown } from '@/components/ui/nav-dropdown'

const projectLinks = [
  { href: '/#selected-projects', label: 'Featured Projects' },
  { href: '/projects', label: 'All Projects' },
]

// Root-relative paths so nav works from any page (e.g. /projects)
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#work-experience', label: 'Work Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#connect', label: 'Connect' },
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
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary-500 dark:text-primary-400">
            <SparklesIcon />
            <span className="text-secondary-500"></span>
          </Link>

          {/* Desktop Navigation Links (Visible on md and larger) */}
          <div className="hidden md:flex items-center gap-2">
            <AnimatedBackground
              defaultValue={navLinks[0].href}
              className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {[
                <Link
                  key={navLinks[0].href}
                  href={navLinks[0].href}
                  data-id={navLinks[0].href}
                  className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {navLinks[0].label}
                </Link>,
                <NavDropdown
                  key="projects"
                  data-id="projects"
                  label="Projects"
                  links={projectLinks}
                />,
                ...navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-id={link.href}
                    className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </Link>
                )),
              ]}
            </AnimatedBackground>
            <ThemeSwitch />
          </div>

          {/* Persistent controls (Theme Switch and Menu Button) */}
          <div className="flex items-center">
            {/* The ThemeSwitch is now outside the responsive divs */}
            <ThemeSwitch />

            {/* Hamburger/Close Button (Visible only on smaller screens) */}
            <button
              onClick={toggleMobileMenu}
              className="ml-2 p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors md:hidden"
              aria-label="Toggle mobile menu"
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
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 py-4 shadow-md"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={motionVariants}
          >
            <div className="flex flex-col items-center space-y-4">
              <Link
                href={navLinks[0].href}
                className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
                onClick={closeMobileMenu}
              >
                {navLinks[0].label}
              </Link>
              <Accordion
                title="Projects"
                titleClassName="text-lg font-bold text-neutral-800 dark:text-neutral-200"
              >
                {projectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-neutral-600 dark:text-neutral-400"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </Accordion>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

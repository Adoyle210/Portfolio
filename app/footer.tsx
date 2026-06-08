'use client'
import { TextLoop } from '@/components/ui/text-loop'
import { HeartIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/Adoyle210/portfolio" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2025 Alexis M. Doyle.</span>
            <span>Built with Motion-Primitives & <HeartIcon className="h-3 w-3 inline" /></span>
          </TextLoop>
        </a>
      </div>
    </footer>
  )
}

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function publicImageSrc(src: string) {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  return src.startsWith('/') ? src : `/${src}`
}

type ProjectLinkProps = {
  name: string
  href?: string
  className?: string
}

const INVALID_LINKS = new Set(['https://www.google.com/'])

export const isValidLink = (link?: string) => {
  if (!link) return false
  const trimmed = link.trim()
  return trimmed.length > 0 && !INVALID_LINKS.has(trimmed)
}

export function ProjectLink({
  name,
  href,
  className = 'font-base inline-block font-[450] text-zinc-900 dark:text-zinc-50',
}: ProjectLinkProps) {
  if (!isValidLink(href)) {
    return <span className={className}>{name}</span>
  }

  return (
    <a
      className={`${className} group relative`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
    </a>
  )
}

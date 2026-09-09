'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { TextEffect } from '@/components/ui/text-effect'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { ImageCarousel } from '@/components/ui/image-carousel'
import { YouTubeEmbed } from '@/components/ui/youtube-embed'
import Link from 'next/link'
import Image from 'next/image'
import { publicImageSrc } from '@/lib/utils'

/* Data */
import { PROJECTS } from './data/project'
import { WORK_EXPERIENCE } from './data/work-experience'
import { TECHNICAL_SKILLS } from './data/technical-skills'
import { EDUCATION, PUBLICATIONS } from './data/education'
import {
  EMAIL,
  SOCIAL_LINKS,
} from './data/links'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectMediaProps = {
  video?: string
  images?: string[]
}

function ProjectMedia({ video, images }: ProjectMediaProps) {
  // Check if video is valid (not placeholder URL and not empty)
  const isValidVideo = video && 
    video !== 'https://www.google.com/' && 
    video.trim() !== '' &&
    (video.startsWith('http') || video.startsWith('/') || video.startsWith('video/'))

  // Check if images are valid (not placeholder URL and not empty)
  const isValidImage = images && 
    images.length > 0 && 
    images[0] !== 'https://www.google.com/' && 
    images[0].trim() !== ''

  // Check if it's a YouTube video
  const isYouTubeVideo = isValidVideo && (
    video.includes('youtube.com') || 
    video.includes('youtu.be')
  )

  // Check if it's a local video file
  const isLocalVideo = isValidVideo && (
    video.startsWith('video/') || 
    video.endsWith('.mp4') || 
    video.endsWith('.webm') || 
    video.endsWith('.mov')
  )

  // If we have a YouTube video, use YouTube embed
  if (isYouTubeVideo) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <YouTubeEmbed videoId={video} />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <YouTubeEmbed videoId={video} />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  // If we have a local video file, use regular video element
  if (isLocalVideo) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full cursor-zoom-in rounded-xl"
            onError={(e) => {
              console.error('Video failed to load:', video, e)
            }}
          />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
              onError={(e) => {
                console.error('Video failed to load in dialog:', video, e)
              }}
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  // If we have multiple images, use carousel
  if (isValidImage && images.length > 1) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <ImageCarousel images={images} />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <ImageCarousel images={images} />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  // If we have a single image, show it normally
  if (isValidImage) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <div className="relative aspect-video w-full">
            <Image
              src={publicImageSrc(images[0])}
              alt="Project preview"
              fill
              className="cursor-zoom-in rounded-xl object-cover"
              onError={(e) => {
                console.error('Image failed to load:', images[0], e)
              }}
            />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <div className="relative aspect-video h-[50vh] w-full md:h-[70vh]">
              <Image
                src={publicImageSrc(images[0])}
                alt="Project preview"
                fill
                className="rounded-xl object-cover"
                onError={(e) => {
                  console.error('Image failed to load in dialog:', images[0], e)
                }}
              />
            </div>
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  // Fallback: show a placeholder
  return (
    <div className="aspect-video w-full rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-500 dark:text-zinc-400">No media available</span>
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

/* ---------------- Skills section ---------------- */

// Which Project field each skill category maps to, and the query param
// the /projects page reads to pre-filter on that field. Categories with
// `null` (Soft Skills, spoken Languages) have no project data to link to,
// so their tags are never clickable.
const CATEGORY_FIELD: Record<
  string,
  { field: 'skills' | 'tools' | 'language'; param: 'skill' | 'tool' | 'language' } | null
> = {
  tech1: { field: 'language', param: 'language' },
  tech2: { field: 'tools', param: 'tool' },
  tech3: { field: 'skills', param: 'skill' },
  tech4: null,
  tech5: null,
}

const SKILLS_PREVIEW_COUNT = 10

type RankedSkill = {
  skill: string
  count: number
  param: 'skill' | 'tool' | 'language' | null
}

function rankSkills(categoryId: string, skills: string[]): RankedSkill[] {
  const mapping = CATEGORY_FIELD[categoryId]

  return skills
    .map((skill) => {
      const count = mapping
        ? PROJECTS.filter((project) => (project[mapping.field] ?? []).includes(skill)).length
        : 0
      return { skill, count, param: mapping ? mapping.param : null }
    })
    .sort((a, b) => {
      // Linkable skills (demonstrated by at least one project) float to the
      // top so the "top 5" preview leads with things people can click into.
      const aLinkable = a.count > 0 ? 1 : 0
      const bLinkable = b.count > 0 ? 1 : 0
      if (aLinkable !== bLinkable) return bLinkable - aLinkable
      if (a.count !== b.count) return b.count - a.count
      return a.skill.localeCompare(b.skill)
    })
}

function SkillTag({ ranked }: { ranked: RankedSkill }) {
  if (ranked.count > 0 && ranked.param) {
    return (
      <Link
        href={`/projects?${ranked.param}=${encodeURIComponent(ranked.skill)}`}
        className="rounded-full bg-zinc-200 px-2.5 py-1 text-sm text-zinc-700 transition-colors hover:bg-zinc-900 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
      >
        {ranked.skill}
      </Link>
    )
  }

  return (
    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-500">
      {ranked.skill}
    </span>
  )
}

function SkillCategorySection({
  category,
}: {
  category: { category: string; skills: string[]; id: string }
}) {
  const ranked = rankSkills(category.id, category.skills)
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? ranked : ranked.slice(0, SKILLS_PREVIEW_COUNT)
  const hiddenCount = ranked.length - visible.length

  return (
    <div className="rounded-xl bg-zinc-100 px-3 py-3 dark:bg-zinc-900/80">
      <div className="flex flex-col space-y-2">
        <h4 className="font-normal dark:text-zinc-100">{category.category}</h4>
        <div className="flex flex-wrap gap-1.5">
          {visible.map((ranked) => (
            <SkillTag key={ranked.skill} ranked={ranked} />
          ))}
        </div>
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="self-start text-sm text-zinc-500 hover:text-zinc-700 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Show {hiddenCount} more
          </button>
        )}
        {expanded && ranked.length > SKILLS_PREVIEW_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="self-start text-sm text-zinc-500 hover:text-zinc-700 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div>
        <Link href="/" className="font-medium text-black dark:text-white">
            Alexis M. Doyle
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect> 
        </div>
        <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
          Recent M.S. graduate in Computer Science from Oregon State University, building simulation systems, internal tools, and interactive applications.
          {/*  I specialize in developing educational VR applications, 3D environments, and full-stack web solutions.
          My passion lies in creating engaging, interactive experiences that make complex concepts accessible through technology. I'm currently leading research on educational game development using VR, large-screen, and mobile platforms to teach microelectronics to children.
          With experience in both industry (Genentech, Daimler Trucks) and academia, I bring a unique perspective to software development, combining practical problem-solving skills with cutting-edge research in immersive technologies. */}
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >

          {/* Education Section */}

    <h3 id="education" className="mb-5 text-lg font-medium">Education</h3>
            <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
            <div className="flex flex-col space-y-3">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="relative rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
                >
                  <div className="flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">{edu.degree}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
                    </div>
                    <p className="shrink-0 pl-4 text-zinc-600 dark:text-zinc-400">
                      {edu.start} - {edu.end}
                    </p>
                  </div>
                  {edu.details && edu.details.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-500 dark:text-zinc-400">
                      {edu.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
    
            {PUBLICATIONS.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                  Publications
                </h4>
                <ul className="space-y-2">
                  {PUBLICATIONS.map((pub) => (
                    <li key={pub.id} className="text-zinc-600 dark:text-zinc-400">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="text-zinc-900 dark:text-zinc-100">{pub.title}</span>
                      )}
                      <span className="text-zinc-500 dark:text-zinc-500">
                        {' '}
                        — {pub.venue}, {pub.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.section>
 
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >  

      {/* Featured Projects Section */}
        <h3 id="selected-projects" className="mb-5 text-lg font-medium">Featured Projects</h3>
        <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.filter(project => project.pinned).map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectMedia video={project.video} images={project.image} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Button */}
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 text-lg transition-colors"
          >
            View All Projects
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 id="work-experience" className="mb-5 text-lg font-medium">Work Experience</h3>
        <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
                <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
                <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-500 dark:text-zinc-400">
                  {job.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 id="skills" className="mb-3 text-lg font-medium">Skills</h3>
        <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
        <div className="flex flex-col space-y-3">
          {TECHNICAL_SKILLS.map((category) => (
            <SkillCategorySection key={category.id} category={category} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 id="connect" className="mb-5 text-lg font-medium">Connect</h3>
        <hr className="border-zinc-300 dark:border-zinc-600 mb-5" />
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
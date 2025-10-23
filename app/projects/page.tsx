'use client'

import { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, Filter, X } from 'lucide-react'
import { ImageCarousel } from '@/components/ui/image-carousel'
import { YouTubeEmbed } from '@/components/ui/youtube-embed'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { PROJECTS } from '../data/project'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_PROJECT = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

type ProjectMediaProps = {
  video?: string
  images?: string[]
}

function ProjectMedia({ video, images }: ProjectMediaProps) {
  const isValidVideo =
    video &&
    video !== 'https://www.google.com/' &&
    video.trim() !== '' &&
    (video.startsWith('http') ||
      video.startsWith('/') ||
      video.startsWith('video/'))

  const isValidImage =
    images &&
    images.length > 0 &&
    images[0] !== 'https://www.google.com/' &&
    images[0].trim() !== ''

  const isYouTubeVideo =
    isValidVideo &&
    (video.includes('youtube.com') || video.includes('youtu.be'))

  const isLocalVideo =
    isValidVideo &&
    (video.startsWith('video/') ||
      video.endsWith('.mp4') ||
      video.endsWith('.webm') ||
      video.endsWith('.mov'))

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
          <MorphingDialogContent className='relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50'>
            <YouTubeEmbed videoId={video} />
          </MorphingDialogContent>
          <MorphingDialogClose
            className='fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1'
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <X className='h-5 w-5 text-zinc-500' />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

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
            className='aspect-video w-full cursor-zoom-in rounded-xl'
            onError={(e) => {
              console.error('Video failed to load:', video, e)
            }}
          />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className='relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50'>
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className='aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]'
              onError={(e) => {
                console.error('Video failed to load in dialog:', video, e)
              }}
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className='fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1'
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <X className='h-5 w-5 text-zinc-500' />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

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
          <MorphingDialogContent className='relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50'>
            <ImageCarousel images={images} />
          </MorphingDialogContent>
          <MorphingDialogClose
            className='fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1'
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <X className='h-5 w-5 text-zinc-500' />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

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
          <img
            src={images[0]}
            alt='Project preview'
            className='aspect-video w-full cursor-zoom-in rounded-xl object-cover'
            onError={(e) => {
              console.error('Image failed to load:', images[0], e)
            }}
          />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className='relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50'>
            <img
              src={images[0]}
              alt='Project preview'
              className='aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]'
              onError={(e) => {
                console.error('Image failed to load in dialog:', images[0], e)
              }}
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className='fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1'
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <X className='h-5 w-5 text-zinc-500' />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  return (
    <div className='flex aspect-video w-full items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800'>
      <span className='text-zinc-500 dark:text-zinc-400'>
        No media available
      </span>
    </div>
  )
}

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  // Get all unique years, skills, tools, languages
  const years = useMemo(() => {
    const uniqueYears = [
      ...new Set(PROJECTS.map((project) => project.year)),
    ].sort((a, b) => b - a)
    return uniqueYears
  }, [])

  const allSkills = useMemo(() => {
    const uniqueSkills = [
      ...new Set(PROJECTS.flatMap((project) => project.skills ?? [])),
    ].sort()
    return uniqueSkills
  }, [])

  const allTools = useMemo(() => {
    const uniqueTools = [
      ...new Set(PROJECTS.flatMap((project) => project.tools ?? [])),
    ].sort()
    return uniqueTools
  }, [])

  const allLanguages = useMemo(() => {
    const uniqueLangs = [
      ...new Set(PROJECTS.flatMap((project) => project.language ?? [])),
    ].sort()
    return uniqueLangs
  }, [])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const yearMatch =
        selectedYear === 'all' || project.year.toString() === selectedYear
      const skills = project.skills ?? []
      const tools = project.tools ?? []
      const languages = project.language ?? []

      const skillMatch =
        selectedSkills.length === 0 ||
        selectedSkills.some((skill) => skills.includes(skill))
      const toolMatch =
        selectedTools.length === 0 ||
        selectedTools.some((tool) => tools.includes(tool))
      const languageMatch =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((lang) => languages.includes(lang))

      return yearMatch && skillMatch && toolMatch && languageMatch
    })
  }, [selectedYear, selectedSkills, selectedTools, selectedLanguages])

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    )
  }

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool],
    )
  }

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
    )
  }

  const clearFilters = () => {
    setSelectedYear('all')
    setSelectedSkills([])
    setSelectedTools([])
    setSelectedLanguages([])
  }

  return (
    <div className='min-h-screen bg-white dark:bg-zinc-950'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <Link
            href='/'
            className='mb-4 inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to Portfolio
          </Link>
          <h1 className='mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100'>
            All Projects
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Explore all my projects with filtering options
          </p>
        </div>

        {/* Filters */}
        <div className='mb-8 rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200/50 dark:bg-zinc-900/50 dark:ring-zinc-800/50'>
          <div className='mb-4 flex items-center gap-2'>
            <Filter className='h-5 w-5 text-zinc-600 dark:text-zinc-400' />
            <h2 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100'>
              Filters
            </h2>
            {(selectedYear !== 'all' ||
              selectedSkills.length > 0 ||
              selectedTools.length > 0 ||
              selectedLanguages.length > 0) && (
              <button
                onClick={clearFilters}
                className='ml-auto text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
              >
                Clear all
              </button>
            )}
          </div>

          {/* Year Filter */}
          <div className='mb-4'>
            <h3 className='mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Year
            </h3>
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setSelectedYear('all')}
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  selectedYear === 'all'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year.toString())}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    selectedYear === year.toString()
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Filter */}
          <div>
            <h3 className='mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Skills
            </h3>
            <div className='flex flex-wrap gap-2'>
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    selectedSkills.includes(skill)
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Filter */}
          <div className='mt-4'>
            <h3 className='mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Tools
            </h3>
            <div className='flex flex-wrap gap-2'>
              {allTools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => toggleTool(tool)}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    selectedTools.includes(tool)
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>

          {/* Languages Filter */}
          <div className='mt-4'>
            <h3 className='mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Languages
            </h3>
            <div className='flex flex-wrap gap-2'>
              {allLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    selectedLanguages.includes(lang)
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className='mb-6'>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
          variants={VARIANTS_CONTAINER}
          initial='hidden'
          animate='visible'
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={VARIANTS_PROJECT}
              className='space-y-3'
            >
              <div className='relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50'>
                <ProjectMedia
                  video={project.video}
                  images={project.image}
                />
              </div>
              <div className='px-1'>
                <a
                  className='font-base group relative mb-2 inline-block font-[450] text-zinc-900 dark:text-zinc-50'
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.name}
                  <span className='absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50'></span>
                </a>
                <p className='mb-3 text-sm text-zinc-600 dark:text-zinc-400'>
                  {project.description}
                </p>
                <div className='mb-2 flex flex-wrap gap-1'>
                  {(project.skills ?? []).map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full bg-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {project.tools && project.tools.length > 0 && (
                  <div className='mb-2 flex flex-wrap gap-1'>
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className='rounded-full bg-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
                {project.language && project.language.length > 0 && (
                  <div className='mb-2 flex flex-wrap gap-1'>
                    {project.language.map((lang) => (
                      <span
                        key={lang}
                        className='rounded-full bg-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
                <p className='text-xs text-zinc-500 dark:text-zinc-500'>
                  {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className='py-12 text-center'>
            <p className='text-zinc-500 dark:text-zinc-400'>
              No projects found matching your filters.
            </p>
            <button
              onClick={clearFilters}
              className='mt-4 text-zinc-600 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

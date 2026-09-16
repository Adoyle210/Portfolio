'use client'

import React, { Suspense } from 'react';

import { useState, useMemo, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ChevronDown, Filter } from 'lucide-react'
import { ProjectMedia } from '@/components/ui/project-media'
import { ProjectLink } from '@/components/ui/project-link'
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

type FilterSectionProps = {
  title: string
  activeCount?: number
  defaultOpen?: boolean
  children: ReactNode
}

function FilterSection({
  title,
  activeCount = 0,
  defaultOpen = false,
  children,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-zinc-200/70 pt-3 first:border-t-0 first:pt-0 dark:border-zinc-800/70">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-2 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {title}
          {activeCount > 0 && (
            <span className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-[10px] leading-none text-white dark:bg-zinc-100 dark:text-zinc-900">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectsPageContent() {
  const searchParams = useSearchParams()

  // Skills-section links land here as ?skill=X, ?tool=Y, ?language=Z
  // (each may repeat, e.g. ?skill=3D+Modeling&skill=Animation)
  const initialSkills = useMemo(() => searchParams.getAll('skill'), [searchParams])
  const initialTools = useMemo(() => searchParams.getAll('tool'), [searchParams])
  const initialLanguages = useMemo(() => searchParams.getAll('language'), [searchParams])
  const hasIncomingFilter =
    initialSkills.length > 0 || initialTools.length > 0 || initialLanguages.length > 0

  const [filtersOpen, setFiltersOpen] = useState(hasIncomingFilter)
  const [selectedSkills, setSelectedSkills] = useState<string[]>(initialSkills)
  const [selectedTools, setSelectedTools] = useState<string[]>(initialTools)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(initialLanguages)

  const activeFilterCount =
    selectedSkills.length + selectedTools.length + selectedLanguages.length

  // Get all unique skills, tools, languages
  const allSkills = useMemo(() => {
    const uniqueSkills = [...new Set(PROJECTS.flatMap(project => project.skills ?? []))].sort()
    return uniqueSkills
  }, [])

  const allTools = useMemo(() => {
    const uniqueTools = [...new Set(PROJECTS.flatMap(project => project.tools ?? []))].sort()
    return uniqueTools
  }, [])

  const allLanguages = useMemo(() => {
    const uniqueLangs = [...new Set(PROJECTS.flatMap(project => project.language ?? []))].sort()
    return uniqueLangs
  }, [])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      // const yearMatch = selectedYear === 'all' || project.year.toString() === selectedYear
      const skills = project.skills ?? []
      const tools = project.tools ?? []
      const languages = project.language ?? []

      const skillMatch = selectedSkills.length === 0 || 
        selectedSkills.some(skill => skills.includes(skill))
      const toolMatch = selectedTools.length === 0 ||
        selectedTools.some(tool => tools.includes(tool))
      const languageMatch = selectedLanguages.length === 0 ||
        selectedLanguages.some(lang => languages.includes(lang))

      return skillMatch && toolMatch && languageMatch
    })
  }, [selectedSkills, selectedTools, selectedLanguages])

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  const toggleTool = (tool: string) => {
    setSelectedTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    )
  }

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages(prev =>
      prev.includes(lang)
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    )
  }

  const clearFilters = () => {
    //setSelectedYear('all')
    setSelectedSkills([])
    setSelectedTools([])
    setSelectedLanguages([])
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            All Projects
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explore all my projects with filtering options
          </p>
        </div>

        <div
          className={`flex flex-col gap-6 ${
            filtersOpen ? 'lg:flex-row lg:items-start lg:gap-8' : ''
          }`}
        >
          {/* Filters — only reserves sidebar space when open */}
          <aside
            className={`relative z-20 shrink-0 ${
              filtersOpen ? 'w-full lg:sticky lg:top-8 lg:w-64' : 'w-full'
            }`}
          >
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              className={`flex items-center justify-between gap-2 rounded-2xl bg-zinc-50 px-4 py-3 ring-1 ring-zinc-200/50 transition-colors hover:bg-zinc-100 dark:bg-zinc-900/50 dark:ring-zinc-800/50 dark:hover:bg-zinc-900 ${
                filtersOpen ? 'w-full' : 'w-full sm:w-auto'
              }`}
              aria-expanded={filtersOpen}
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Filter className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-[10px] leading-none text-white dark:bg-zinc-100 dark:text-zinc-900">
                    {activeFilterCount}
                  </span>
                )}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
                  filtersOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {filtersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className="absolute left-0 right-0 z-20 mt-2 origin-top lg:relative lg:mt-3"
                >
                  <div className="space-y-3 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-zinc-200/70 dark:bg-zinc-950 dark:shadow-zinc-950/50 dark:ring-zinc-800/70">
                    {activeFilterCount > 0 && (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={clearFilters}
                          className="text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                        >
                          Clear all
                        </button>
                      </div>
                    )}

                    {/* Year Filter
                    <FilterSection title="Year" defaultOpen>
                      ...
                    </FilterSection>
                    */}

                    <FilterSection
                      title="Skills"
                      activeCount={selectedSkills.length}
                      defaultOpen
                    >
                      {allSkills.map((skill) => (
                        <button
                          key={skill}
                          type="button"
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
                    </FilterSection>

                    <FilterSection
                      title="Tools"
                      activeCount={selectedTools.length}
                    >
                      {allTools.map((tool) => (
                        <button
                          key={tool}
                          type="button"
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
                    </FilterSection>

                    <FilterSection
                      title="Languages"
                      activeCount={selectedLanguages.length}
                    >
                      {allLanguages.map((lang) => (
                        <button
                          key={lang}
                          type="button"
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
                    </FilterSection>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </aside>

          {/* Projects */}
          <div className="min-w-0 flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-zinc-600 dark:text-zinc-400">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Projects Grid */}
            <motion.div
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${
                filtersOpen ? 'xl:grid-cols-3' : 'lg:grid-cols-3'
              }`}
              variants={VARIANTS_CONTAINER}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={VARIANTS_PROJECT}
                  className="space-y-3"
                >
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <ProjectMedia video={project.video} images={project.image} />
                  </div>
                  <div className="px-1">
                    <ProjectLink
                      name={project.name}
                      href={project.link}
                      className="font-base mb-2 inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    />
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {(project.skills ?? []).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {(project.tools && project.tools.length > 0) && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                    {(project.language && project.language.length > 0) && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.language.map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      {project.year}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-500 dark:text-zinc-400">
                  No projects found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsPageContent />
    </Suspense>
  )
}
'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { ImageCarousel } from '@/components/ui/image-carousel'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { YouTubeEmbed } from '@/components/ui/youtube-embed'
import { publicImageSrc } from '@/lib/utils'

type ProjectMediaProps = {
  video?: string
  images?: string[]
}

const INVALID_LINKS = new Set(['https://www.google.com/'])

const isValidAsset = (value?: string) => {
  if (!value) return false
  const trimmed = value.trim()
  return trimmed.length > 0 && !INVALID_LINKS.has(trimmed)
}

export function ProjectMedia({ video, images }: ProjectMediaProps) {
  const firstImage = images?.[0]
  const isValidVideo = isValidAsset(video)
  const isValidImage = isValidAsset(firstImage)

  const isYouTubeVideo = Boolean(
    isValidVideo && video && (video.includes('youtube.com') || video.includes('youtu.be')),
  )

  const isLocalVideo = Boolean(
    isValidVideo &&
      video &&
      (video.startsWith('video/') ||
        video.endsWith('.mp4') ||
        video.endsWith('.webm') ||
        video.endsWith('.mov')),
  )

  if (isYouTubeVideo && video) {
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
            <X className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  if (isLocalVideo && video) {
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
            <X className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  if (isValidImage && images && images.length > 1) {
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
            <X className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  if (isValidImage && firstImage) {
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
              src={publicImageSrc(firstImage)}
              alt="Project preview"
              fill
              className="cursor-zoom-in rounded-xl object-cover"
              onError={(e) => {
                console.error('Image failed to load:', firstImage, e)
              }}
            />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <div className="relative aspect-video h-[50vh] w-full md:h-[70vh]">
              <Image
                src={publicImageSrc(firstImage)}
                alt="Project preview"
                fill
                className="rounded-xl object-cover"
                onError={(e) => {
                  console.error('Image failed to load in dialog:', firstImage, e)
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
            <X className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800">
      <span className="text-zinc-500 dark:text-zinc-400">No media available</span>
    </div>
  )
}

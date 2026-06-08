'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

type YouTubeEmbedProps = {
  videoId: string
  title?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video" }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url: string): string => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    
    return url // Return as-is if no pattern matches (might already be just the ID)
  }

  const cleanVideoId = extractVideoId(videoId)

  if (!cleanVideoId) {
    return (
      <div className="aspect-video w-full rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
        <span className="text-zinc-500 dark:text-zinc-400">Invalid YouTube URL</span>
      </div>
    )
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}?autoplay=1&rel=0`

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden relative group">
      {!isPlaying ? (
        // Thumbnail with play button
        <div 
          className="relative h-full w-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover"
            onError={(e) => {
              console.error('YouTube thumbnail failed to load:', thumbnailUrl, e)
            }}
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="rounded-full bg-red-600 p-4 group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>

          {/* YouTube logo */}
          <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
            YouTube
          </div>
        </div>
      ) : (
        // Embedded video
        <iframe
          src={embedUrl}
          title={title}
          className="h-full w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

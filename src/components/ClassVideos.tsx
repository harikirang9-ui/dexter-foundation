"use client";

import { useState } from "react";
import type { Video } from "@/data/coaching-data";

function VideoCard({ videoId, title, orientation = "vertical" }: { videoId: string; title: string; orientation?: "horizontal" | "vertical" }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const isHorizontal = orientation === "horizontal";

  const aspectClass = isHorizontal ? "aspect-[16/9]" : "aspect-[9/16] max-w-[372px]";

  if (playing) {
    return (
      <div className={`relative w-full ${aspectClass} rounded-lg overflow-hidden`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`relative w-full ${aspectClass} rounded-lg overflow-hidden group cursor-pointer`}
    >
      <img
        src={thumbnail}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-[60px] h-[60px] md:w-[74px] md:h-[74px] rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
            <path d="M28 16L0 32V0L28 16Z" fill="#e57c3a" />
          </svg>
        </div>
      </div>
    </button>
  );
}

interface ClassVideosProps {
  videos?: Video[];
}

export default function ClassVideos({ videos = [] }: ClassVideosProps) {
  if (videos.length === 0) return null;

  return (
    <section id="class-videos" className="bg-[#fffbf8] py-12 px-4 md:px-10 lg:px-[150px]">
      <h2 className="text-[20px] md:text-[36px] font-bold text-primary text-center mb-2">
        Class Videos
      </h2>
      <p className="text-[14px] md:text-[24px] text-muted text-center mb-8 md:mb-10">
        Watch our class sessions and learning activities
      </p>

      <div className={`grid gap-6 md:gap-[42px] mx-auto ${
        videos.length === 1 ? "grid-cols-1 max-w-[500px]" : "grid-cols-1 md:grid-cols-2 max-w-[1000px]"
      }`}>
        {videos.map((video, i) => (
          <VideoCard key={i} videoId={video.id} title={video.title} orientation={video.orientation} />
        ))}
      </div>
    </section>
  );
}

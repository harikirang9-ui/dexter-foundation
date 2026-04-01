"use client";

import { useState } from "react";

function VideoCard({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="relative w-full max-w-[480px] aspect-square rounded-lg overflow-hidden">
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
      className="relative w-full max-w-[480px] aspect-square rounded-lg overflow-hidden group cursor-pointer"
    >
      <img
        src={thumbnail}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
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

export default function TeacherVideos() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[42px]">
      <VideoCard videoId="0uyzYCA6_Is" title="Teacher Testimonial 1" />
      <VideoCard videoId="E6U8fQx1kiU" title="Teacher Testimonial 2" />
    </div>
  );
}

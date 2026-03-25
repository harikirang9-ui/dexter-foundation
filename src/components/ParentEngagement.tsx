"use client";

import { useState } from "react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "PTM Event 1" }, // dummy YT link - replace later
  { id: "dQw4w9WgXcQ", title: "PTM Event 2" }, // dummy YT link - replace later
  { id: "dQw4w9WgXcQ", title: "PTM Event 3" }, // dummy YT link - replace later
];

function VideoCard({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="relative w-[372px] h-[597px] rounded-lg overflow-hidden">
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
      className="relative w-[372px] h-[597px] rounded-lg overflow-hidden group cursor-pointer"
    >
      <img
        src={thumbnail}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-[74px] h-[74px] rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
            <path d="M28 16L0 32V0L28 16Z" fill="#e57c3a" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function ParentEngagement() {
  return (
    <section className="bg-[#fffbf8] py-12 px-[150px]">
      <h2 className="text-[36px] font-bold text-primary text-center mb-2">
        Engaging Parents, Empowering Students
      </h2>
      <p className="text-[24px] text-muted text-center mb-10">
        Regular PTMs to track progress and build support
      </p>

      <div className="flex gap-[42px]">
        {videos.map((video, i) => (
          <VideoCard key={i} videoId={video.id} title={video.title} />
        ))}
      </div>
    </section>
  );
}

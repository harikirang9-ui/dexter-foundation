"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroImageProps {
  images?: string[];
}

export default function HeroImage({ images = [] }: HeroImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section id="program-structure" className="px-4 md:px-10 lg:px-[150px] mt-8 mb-8">
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[468px] rounded-[20px] overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`Program Structure ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full ${
              i === activeIndex ? "bg-accent" : "bg-[#d9d9d9]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const heroImg =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/hero.png";

const carouselImages = [
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/hero.png",
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/2_barefoot_1x.webp",
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/3_barefoot_1x.webp",
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/4_barefoot_1x.webp",
];

const storyOverlay =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Our%20Story/story%20overlay.png";
const rafikImg =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/Rafik%20Mohammad.png";

const stats = [
  { count: 45, state: "Himachal Pradesh" },
  { count: 39, state: "Rajasthan" },
  { count: 79, state: "Karnataka" },
  { count: 28, state: "Odisha" },
  { count: 59, state: "Assam" },
];


function VideoCard({ id, className = "" }: { id: string; className?: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative w-full aspect-[9/16] rounded-lg overflow-hidden ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`relative w-full aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer ${className}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Video thumbnail"
        fill
        className="object-cover"
      />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-black/80 transition-colors">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
            <path d="M24 14L0 28V0L24 14Z" fill="white" />
          </svg>
        </div>
      </div>
    </button>
  );
}

const studentVideoIds = ["6Ob7p_vnQ4U", "6JQHgq0BKr4", "F1HD2Kvo59E"];

function StudentTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? studentVideoIds.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === studentVideoIds.length - 1 ? 0 : i + 1));

  return (
    <section className="px-4 md:px-10 lg:px-[150px] py-10">
      <h2 className="text-[20px] md:text-[36px] font-bold text-primary text-center mb-10">
        Testimonials from our students
      </h2>

      {/* Desktop: show all 3 */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
        {studentVideoIds.map((id) => (
          <VideoCard key={id} id={id} />
        ))}
      </div>

      {/* Mobile: carousel with arrows */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={prev} className="flex-shrink-0 w-9 h-9 rounded-full bg-[#ff8030] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex-1 flex justify-center">
          <VideoCard id={studentVideoIds[currentIndex]} />
        </div>
        <button onClick={next} className="flex-shrink-0 w-9 h-9 rounded-full bg-[#ff8030] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex md:hidden justify-center gap-2 mt-4">
        {studentVideoIds.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentIndex ? "bg-[#ff8030]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default function BarefootEnglishTrainingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <main className="flex-1 bg-[#fffbf8]">
        {/* Section 1: Title + Hero */}
        <section className="px-4 md:px-10 lg:px-[150px] pt-12 pb-10">
          <h1 className="text-[22px] md:text-[36px] font-bold text-primary text-center mb-8">
            Barefoot English Training
          </h1>
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden">
            <Image src={carouselImages[currentSlide]} alt="Barefoot English Training" fill className="object-cover" />
          </div>
          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  i === currentSlide ? "bg-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Description */}
        <section className="px-4 md:px-10 lg:px-[150px] pb-10">
          <div className="text-[18px] text-[#333] leading-[1.7] text-justify space-y-4 max-w-[1000px] mx-auto">
            <p>
              The English Empowerment Program for Underprivileged Children is a joint initiative by
              Multibhashi Solutions Private Limited and EMP Bindi International Association (formerly
              Barefoot College International).
            </p>
            <p>
              The program, which ran from April 1, 2023, to March 31, 2024, aimed to bridge the
              English language gap for children from underserved communities.
            </p>
            <p>
              We express our deepest gratitude to our teachers, volunteers, donors, and, most
              importantly, the communities we serve, for their unwavering support and belief in our
              mission. Together, we are not just teaching English; we are opening doors to a world of
              opportunities.
            </p>
          </div>
        </section>

        {/* Section 3: Stats cards */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <div className="flex flex-wrap gap-6 justify-center">
            {stats.map((item) => (
              <div
                key={item.state}
                className="flex-1 min-w-[140px] border border-gray-200 rounded-lg py-6 px-4 text-center bg-white"
              >
                <p className="text-[14px] text-[#666] mb-1">Total Students</p>
                <p className="text-[40px] font-bold text-accent leading-tight">{item.count}</p>
                <p className="text-[16px] text-[#333] mt-1">{item.state}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Testimonial by NGO Partner */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <h2 className="text-[22px] md:text-[36px] font-bold text-primary text-center mb-10">
            Testimonial by NGO Partner
          </h2>
          <div className="flex flex-col lg:flex-row rounded-[6px] overflow-hidden shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] bg-white">
            {/* Left - photo with overlay bg and white name card */}
            <div className="relative w-full lg:w-[435px] flex-shrink-0 min-h-[300px] self-stretch">
              {/* Overlay bg fills entire left panel */}
              <div className="absolute inset-0 overflow-hidden">
                <Image src={storyOverlay} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 435px" />
              </div>
              {/* Person photo fills full height */}
              <div className="absolute inset-0">
                <Image src={rafikImg} alt="Rafik Mohammad" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 435px" />
              </div>
              {/* Name card */}
              <div className="absolute left-[20px] bottom-[20px] right-[20px] bg-white rounded-[5px] px-4 py-3 shadow-sm z-10">
                <p className="text-[18px] font-bold text-accent capitalize tracking-[0.54px] leading-[1.41]">
                  Rafik Mohammad
                </p>
                <p className="text-[14px] text-[#333]">
                  NGO Partner
                </p>
              </div>
            </div>
            {/* Right - text */}
            <div className="flex-1 px-10 py-6 text-[16px] text-[#333] leading-[1.7] space-y-4 flex flex-col justify-center">
              <p>
                Multibhashi has been an invaluable partner in our CSR project, aiding Bindi
                International in training 250 children both online and offline. Their innovative
                language learning platform has revolutionized the way we deliver education, breaking
                down barriers and reaching children regardless of their location or background.
              </p>
              <p>
                With Multibhashi&apos;s comprehensive online resources and offline support, we&apos;ve been
                able to provide quality education and essential language skills to these children,
                empowering them for a brighter future.
              </p>
              <p>
                Their dedication to our cause has made a significant impact, and we&apos;re grateful for
                their unwavering support in our mission to uplift communities through education.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Testimonials from students */}
        <StudentTestimonialsCarousel />

        {/* Section 6: Testimonials from Class Teacher */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <h2 className="text-[22px] md:text-[36px] font-bold text-primary text-center mb-10">
            Testimonials from Class Teacher
          </h2>
          <div className="flex justify-center">
            <VideoCard id="wAjW2PahEs0" className="max-w-[300px]" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

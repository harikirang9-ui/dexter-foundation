"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroImg =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/hero.png";
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

const dummyVideoId = "dQw4w9WgXcQ";

function VideoCard({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full max-w-[372px] h-[597px] rounded-lg overflow-hidden">
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
      className="relative w-full max-w-[372px] h-[597px] rounded-lg overflow-hidden group cursor-pointer"
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

export default function BarefootEnglishTrainingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#fffbf8]">
        {/* Section 1: Title + Hero */}
        <section className="px-4 md:px-10 lg:px-[150px] pt-12 pb-10">
          <h1 className="text-[36px] font-bold text-primary text-center mb-8">
            Barefoot English Training
          </h1>
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[480px] rounded-lg overflow-hidden">
            <Image src={heroImg} alt="Barefoot English Training" fill className="object-cover" />
          </div>
          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 0 ? "bg-accent" : "bg-gray-300"
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
          <h2 className="text-[36px] font-bold text-primary text-center mb-10">
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
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <h2 className="text-[36px] font-bold text-primary text-center mb-10">
            Testimonials from our students
          </h2>
          <div className="flex flex-wrap justify-center gap-[42px]">
            {[0, 1, 2].map((i) => (
              <VideoCard key={i} id={dummyVideoId} />
            ))}
          </div>
        </section>

        {/* Section 6: Testimonials from Trainer */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <h2 className="text-[36px] font-bold text-primary text-center mb-10">
            Testimonials from Trainer
          </h2>
          <div className="flex justify-center">
            <VideoCard id={dummyVideoId} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

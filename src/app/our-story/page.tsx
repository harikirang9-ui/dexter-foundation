"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const storyOverlay = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Our%20Story/story%20overlay.png";
const impactImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Our%20Story/How%20Navodaya%20Made%20an%20Impact%3F.png";
const icon1 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Our%20Story/1%20icon.png";
const icon2 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Our%20Story/2%20icon.png";
const icon3 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Our%20Story/3%20icon.png";

export default function OurStoryPage() {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#fffbf8]">
        {/* Title */}
        <section className="pt-12 pb-10 px-[150px]">
          <h1 className="text-[36px] font-bold text-primary text-center mb-4">
            Our Story
          </h1>
          <p className="text-[24px] text-[#4f4f4f] text-center max-w-[1182px] mx-auto leading-[1.2]">
            A journey rooted in personal experience, driven by the belief that education can transform lives — one village, one child at a time.
          </p>
        </section>

        {/* The Beginning */}
        <section className="px-[150px] pb-10">
          <h2 className="text-[34px] font-bold text-primary mb-6">The Beginning</h2>
          <p className="text-[18px] text-[#333] leading-[1.6] max-w-[1212px]">
            Dexter Foundation is the brainchild of our Founder, Devendra Agrawal, who was born in a small village of Rajasthan, Hasampur, and discovered education as the single most important life-altering parameter in his life. The foundation is committed to enabling rural underprivileged kids to discover education opportunities and experience a huge impact resulting from it.
          </p>
        </section>

        {/* How Navodaya Made an Impact? */}
        <section className="mx-[150px] mb-10 rounded-[10px] overflow-hidden relative min-h-[550px]">
          {/* Background overlay */}
          <div className="absolute inset-0">
            <Image src={storyOverlay} alt="" fill className="object-cover" />
          </div>
          {/* Foreground image */}
          <div className="absolute right-0 top-0 w-[500px] h-full">
            <Image src={impactImg} alt="How Navodaya Made an Impact" fill className="object-cover object-right" />
          </div>
          {/* Content */}
          <div className="relative z-10 p-12 max-w-[650px]">
            <h2 className="text-[36px] font-bold text-white mb-8 leading-[1.3]">
              How Navodaya Made an Impact?
            </h2>
            <p className="text-[18px] text-white/90 leading-[1.6] mb-8">
              Jawahar Navodaya Vidyalayas are a system of central government schools for talented students predominantly from rural areas. They provide quality education, completely free of cost, including boarding, meals, and uniforms — giving every child an equal opportunity to excel regardless of their socio-economic background.
            </p>

            {/* 3 Icons */}
            <div className="flex gap-8 mt-6">
              <div className="flex flex-col items-center text-center w-[160px]">
                <div className="relative w-[60px] h-[60px] mb-3">
                  <Image src={icon1} alt="" fill className="object-contain" />
                </div>
                <p className="text-[14px] text-white leading-[1.4]">
                  Free quality education from Class 6 to 12
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-[160px]">
                <div className="relative w-[60px] h-[60px] mb-3">
                  <Image src={icon2} alt="" fill className="object-contain" />
                </div>
                <p className="text-[14px] text-white leading-[1.4]">
                  Residential schooling with holistic development
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-[160px]">
                <div className="relative w-[60px] h-[60px] mb-3">
                  <Image src={icon3} alt="" fill className="object-contain" />
                </div>
                <p className="text-[14px] text-white leading-[1.4]">
                  Exposure to sports, culture, and leadership
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it changed our family's journey? - with fade-in */}
        <section className="px-[150px] py-10">
          <div
            ref={(el) => { fadeRefs.current[0] = el; }}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <h2 className="text-[36px] font-bold text-primary text-center mb-8">
              How it changed our family&apos;s journey?
            </h2>
          </div>

          <div className="max-w-[1100px] mx-auto space-y-10">
            {/* Dr. Manoj Gupta */}
            <div
              ref={(el) => { fadeRefs.current[1] = el; }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
            >
              <div className="bg-white rounded-[10px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-8">
                <h3 className="text-[22px] font-bold text-accent mb-1">Dr. Manoj Gupta</h3>
                <p className="text-[14px] text-[#666] mb-4">Navodaya Batch of 1987 | Founder, Shri Shyam Hospital | M.S. (Orthopaedics)</p>
                <p className="text-[18px] text-[#333] leading-[1.6]">
                  {`Born in Hasampur, Manoj was part of the very first batch of Navodaya in 1987. With dedicated teachers who believed in him more than he believed in himself, he went on to become a doctor. Today, he runs his own hospital in Kotputli. His journey inspired his younger brothers — Pradeep and Devendra — to pursue engineering, creating a ripple effect that transformed the entire family.`}
                </p>
              </div>
            </div>

            {/* Devendra Agrawal */}
            <div
              ref={(el) => { fadeRefs.current[2] = el; }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
            >
              <div className="bg-white rounded-[10px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-8">
                <h3 className="text-[22px] font-bold text-accent mb-1">Devendra Agrawal</h3>
                <p className="text-[14px] text-[#666] mb-4">IIT Bombay 2005 | Founder, Dexter Capital Advisors & Dexter Foundation</p>
                <p className="text-[18px] text-[#333] leading-[1.6]">
                  {`Inspired by his elder brother Dr. Manoj's success, Devendra pursued education with determination. He graduated from IIT Bombay and went on to build Dexter Capital, a leading investment banking firm. Recognizing how education changed his own life, he founded Dexter Foundation to give rural children the same opportunities that transformed his family's destiny.`}
                </p>
              </div>
            </div>

            {/* Preeti Agrawal */}
            <div
              ref={(el) => { fadeRefs.current[3] = el; }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300"
            >
              <div className="bg-white rounded-[10px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-8">
                <h3 className="text-[22px] font-bold text-accent mb-1">Preeti Agrawal</h3>
                <p className="text-[14px] text-[#666] mb-4">{`Navodaya 2003–2010 | B.Tech in Computer Science | Senior Software Engineer at Verizon`}</p>
                <p className="text-[18px] text-[#333] leading-[1.6]">
                  {`Preeti entered Navodaya as a shy girl full of dreams. Seven years later, she walked out with the confidence to win public speaking competitions. Today, as a software engineer at Verizon, she is living proof of Navodaya's life-changing impact. Through the Dexter Foundation, she now helps other talented students unlock their true potential.`}
                </p>
              </div>
            </div>

            {/* Prince Agrawal */}
            <div
              ref={(el) => { fadeRefs.current[4] = el; }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500"
            >
              <div className="bg-white rounded-[10px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-8">
                <h3 className="text-[22px] font-bold text-accent mb-1">Prince Agrawal</h3>
                <p className="text-[14px] text-[#666] mb-4">IIT Delhi 1999 | Chief of Staff at FruBon (Dev Milk Foods Pvt. Ltd.)</p>
                <p className="text-[18px] text-[#333] leading-[1.6]">
                  {`For Prince, Navodaya was more than a school — it was a family. The disciplined environment, healthy competition, and exposure to India's diverse cultures helped him crack IIT JEE. Encouraged by Dr. Manoj's achievements, his family continued sending children for competitive exam preparation. Today, he works at a startup building India's dairy future.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Mission Continues */}
        <section className="px-[150px] py-10">
          <div
            ref={(el) => { fadeRefs.current[5] = el; }}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="bg-[#4A749E] rounded-[10px] p-12 text-center">
              <h2 className="text-[36px] font-bold text-white mb-6">The Mission Continues</h2>
              <p className="text-[18px] text-white/90 leading-[1.6] max-w-[900px] mx-auto">
                What began as one family&apos;s transformation has now become a movement. The Dexter Foundation is committed to training hundreds of rural students every year, preparing them for the Navodaya entrance exam and giving them the chance to rewrite their futures — just like Manoj, Devendra, Preeti, and Prince did.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

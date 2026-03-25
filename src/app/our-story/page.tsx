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

const timeline = [
  {
    year: "1980",
    title: "The Roots",
    points: [
      "The cloth merchant business was a family legacy started by our great-grandfather, Seth Ishwar Das Ji.",
    ],
  },
  {
    year: "1988",
    title: "The Turning Point",
    points: [
      "The new Navodaya School was established, but local families were hesitant to enroll their children.",
      "To set an example for the village, my grandfather was requested to send his grandson—my eldest brother, Manoj.",
      "This single, serendipitous event became the pivotal moment that changed our family's destiny.",
    ],
  },
  {
    year: "1995",
    title: "The First Ripple - A Doctor in the Family",
    points: [
      "After finishing 12th grade at Navodaya, and with encouragement from his teachers, Manoj appeared for the Pre-Medical Test (PMT) without any formal coaching. He secured outstanding ranks: 115th in the All India Entrance and 4th in the PMT.",
      "He secured a top rank and got admission to study M.B.B.S., sparking immense confidence and new aspirations within our family.",
    ],
  },
  {
    year: "1997",
    title: "The Second Ripple - An Engineer is Forged",
    points: [
      "Dr. Manoj's achievements encouraged our family to send the second son, Pradeep, to Delhi for engineering entrance exam preparation.",
      "He successfully gained admission into M.B.M. Engineering College, Jodhpur, Rajasthan",
    ],
  },
  {
    year: "1999",
    title: "A Brother's Intervention",
    points: [
      "My father wanted me to take over the cloth merchant business after completing 10th and 12th grades. Their plan was that I would appear for the entrance exam—if I passed, I would pursue further studies; if not, I would return and manage the shop, as I was the only one left to do so. Fortunately, on my second attempt, I secured an impressive JEE rank of 136, improving significantly from my first attempt rank of 2693 and went on to join IIT Bombay in 2001.",
    ],
  },
  {
    year: "",
    title: 'Our "Why"',
    points: [
      "In 1998, when my brother Dr Manoj Gupta became a doctor, it sparked great confidence in my Dadaji. Back in 1995, my father wanted him to join B.Sc. college at Lal Bahadur College, Kotputli, but my brother dreamed of becoming a doctor. If he had gone to B.Sc. college instead, I and my other brother might have remained in the same village.",
      "His achievement sparked a chain reaction, boosting confidence within our family. The moment my brother, Manoj Gupta, became a doctor, it was as memorable and inspiring as India winning the 1983 World Cup, igniting a cricket frenzy, or Neeraj Chopra winning the gold medal.",
    ],
  },
];

export default function OurStoryPage() {
  const fadeRef = useRef<HTMLDivElement>(null);

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

    if (fadeRef.current) observer.observe(fadeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#fffbf8]">
        {/* How Navodaya Made an Impact? */}
        <section className="px-4 md:px-10 lg:px-[150px] pt-12 pb-10">
          <h1 className="text-[36px] font-bold text-primary text-center mb-10">
            How Navodaya Made an Impact?
          </h1>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Text left */}
            <div className="flex-1 text-[18px] text-[#333] leading-[1.6] text-justify space-y-4">
              <p>
                Navodaya Vidyalaya played a pivotal role in transforming not just the future of one student, but the destiny of an entire family.
              </p>
              <p>
                In Hasampur, a small village in Neem Ka Thana Tehsil of Sikar district, professional education was rare. Most families, including ours, were engaged in traditional occupations like running an ancestral cloth merchant business.
              </p>
              <p>
                Higher studies like engineering or medicine were unheard of, due to lack of awareness, exposure, and financial constraints.
              </p>
              <p>
                When Navodaya Vidyalaya started in <strong>1987</strong>, it was viewed with skepticism. There was little awareness, and parents were hesitant to send their children away. At the personal request of a respected senior from our village, my grandfather sent my elder brother, <strong>Dr. Manoj Gupta</strong>, to Navodaya, not driven by ambition, but to set an example for others.
              </p>
            </div>

            {/* Image right with overlay */}
            <div className="flex-shrink-0 w-full lg:w-[440px] h-[250px] md:h-[340px] relative rounded-[10px] overflow-hidden">
              <Image src={storyOverlay} alt="" fill className="object-cover" />
              <div className="absolute inset-0">
                <Image src={impactImg} alt="How Navodaya Made an Impact" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* What started as a simple decision */}
        <section className="px-4 md:px-10 lg:px-[150px] pb-10">
          <h2 className="text-[22px] font-bold text-[#333] mb-8 leading-[1.4]">
            {`What started as a simple decision—to send one child to Navodaya as a role model—turned into something much bigger:`}
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-[50px] h-[50px] flex-shrink-0 relative">
                <Image src={icon1} alt="" fill className="object-contain" />
              </div>
              <p className="text-[16px] text-[#333] leading-[1.4]">
                It sparked a chain reaction in our family
              </p>
            </div>
            <div className="flex items-start gap-4 flex-1">
              <div className="w-[50px] h-[50px] flex-shrink-0 relative">
                <Image src={icon2} alt="" fill className="object-contain" />
              </div>
              <p className="text-[16px] text-[#333] leading-[1.4]">
                It transformed our family&apos;s identity from traditional cloth merchants into a community of doctors, engineers, and other professionals.
              </p>
            </div>
            <div className="flex items-start gap-4 flex-1">
              <div className="w-[50px] h-[50px] flex-shrink-0 relative">
                <Image src={icon3} alt="" fill className="object-contain" />
              </div>
              <p className="text-[16px] text-[#333] leading-[1.4]">
                It might also inspire many others in our village and nearby communities to pursue careers as doctors and engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-4 md:mx-10 lg:mx-[150px] border-t border-[#ddd]" />

        {/* How it changed our family's journey? - with fade-in */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <div
            ref={fadeRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <h2 className="text-[36px] font-bold text-primary text-center mb-12">
              How it changed our family&apos;s journey ?
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-[900px] mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-0">
                {/* Year */}
                <div className="w-[60px] lg:w-[120px] flex-shrink-0 text-right pr-3 lg:pr-6 pt-1">
                  {item.year && (
                    <p className="text-[24px] lg:text-[40px] font-bold text-[#8FAFCF] italic leading-none">
                      {item.year}
                    </p>
                  )}
                </div>

                {/* Dot + Line */}
                <div className="flex flex-col items-center flex-shrink-0 w-[20px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#4A749E] border-2 border-[#4A749E] flex-shrink-0 mt-2" />
                  {i < timeline.length - 1 && (
                    <div className="w-[2px] flex-1 bg-[#4A749E] opacity-30" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pl-6 pb-10">
                  <h3 className="text-[18px] font-bold text-[#333] mb-2">{item.title}</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-[16px] text-[#333] leading-[1.5]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

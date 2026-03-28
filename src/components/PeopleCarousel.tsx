"use client";

import { useState } from "react";
import Image from "next/image";

const people = [
  {
    name: "Dr.Manoj Gupta",
    title: "Founder of Shri Shyam Hospital\nM.S (Orthopaedics)\nHead of Trauma Unit",
    image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Dr.Manoj%20Gupta.png",
    bgOverlay: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/team%20bg%20.png",
    story: `My name is Manoj and I am from Hasampur, a small village with very few educational opportunities. My father was a cloth merchant, and though I loved studying, the people around me often discouraged me, saying things like, 'Kaunsa doctor, engineer ban jaoge?' For a while, it felt like my dreams were too far away.

Everything changed when I entered Navodaya. The disciplined environment, dedicated teachers, and the culture of excellence opened doors I never imagined were possible. While I was preparing for my Class 12th exams, I wasn't even aware of the CPMT entrance examination. It was my teachers, Ms. Nutan Maheshwari and Smt. Seema Dalal, who recognized my potential and guided me through the entire process. Their support went far beyond the classroom, their husbands even travelled all the way to Patan to submit the CPMT application on my behalf, at a time when my father wanted me to pursue a B.Sc. in Kotputli. Such encouragement and belief would not have been possible had I not been a part of Navodaya. Navodaya gave me not only confidence but also direction. The constant motivation, guidance, and faith of my teachers pushed me to give my best. I secured a good rank in the CPMT exam, which enabled me to join KM Hospital, Mumbai, for my MBBS. Later, I completed my MS in Orthopedics from Jodhpur. Today, I run my own hospital in Kotputli and serve my community with pride.

What began as a small and almost accidental step, being part of the first batch of Navodaya 1987, transformed not just my life, but the future of my entire family. Inspired by my journey, both my younger brothers became engineers. The ripple effect of Navodaya uplifted us all and I will always be grateful.`,
  },
  {
    name: "Preeti Agrawal",
    title: "Bachelor's in Computer Science\nSenior Software Engineer at Verizon",
    image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Preeti%20Agrawal.png",
    bgOverlay: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/team%20bg%20.png",
    story: `When I entered Navodaya in 2003 as a young girl, I was full of dreams but held back by shyness and stage fright. Seven years later, in 2010, I walked out with a confidence I never knew I had.

Navodaya did not just educate me, it transformed me. The values of hard work, discipline, and perseverance shaped my personality and helped me turn my fear of the stage into the confidence to win first prize in public speaking. Today, as a software engineer with a fulfilling career, I am living proof of the life-changing impact of Navodaya's holistic approach to education.

Beyond academics, Navodaya taught me invaluable life skills and gave me a second family. Through the Dexter Foundation, we now aspire to support other talented young students in unlocking their true potential, just as Navodaya helped me unlock mine.

Inspired by my elder brothers Dr. Manoj Gupta, who became a doctor, and Pradeep Agarwal and Devendra Agarwal, who became engineers, Navodaya became the foundation that helped me turn my aspirations into reality.`,
  },
  {
    name: "Prince Agrawal",
    title: "IIT Delhi\nChief of Staff at Frubon\n(Dev Milk Foods Pvt. Ltd.)",
    image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Prince%20Agrawal.png",
    bgOverlay: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/team%20bg%20.png",
    story: `Navodaya has always been more than a school – it was a family. We entered its gates as children with tears in our eyes but left with lifelong bonds and memories.

The institution gave me opportunities that shaped my outlook from sports and NCC to experiencing India's diverse cultures. It taught me to respect different perspectives, embrace teamwork, and develop leadership skills that many gain much later in life.

The disciplined environment built focus and determination, which helped me crack IIT JEE. The culture of healthy competition, equality, and mutual respect laid a strong foundation for my academic and personal growth.

Navodaya gave me a second family and philosophy to live life to the fullest — something I'll always be grateful for. Dr. Manoj's achievements encouraged our family to send more kids for engineering entrance exam preparation. I secured admission to IIT Delhi in 1999, and today, I work in a startup Dev Milk Foods Pvt. Ltd. (FruBon).`,
  },
];

export default function PeopleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const person = people[activeIndex];

  return (
    <section className="py-10">
      <h2 className="text-[22px] md:text-[36px] font-bold text-primary text-center mb-3">
        Our Journey, Our People
      </h2>
      <p className="text-[18px] text-[#333] text-center max-w-[890px] mx-auto mb-10 leading-[1.2]">
        {`Navodaya is not just a program for us — it's part of our family's DNA. The foundation of this initiative lies in the journeys of our own family members, who studied at Navodaya and went on to achieve more than they once thought possible. Their success inspired us to extend this opportunity to many others.`}
      </p>

      {/* Card */}
      <div className="bg-white rounded-[6px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] overflow-hidden max-w-[1212px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Photo side - Mobile */}
          <div className="lg:hidden flex flex-col items-center px-4 pt-6 pb-2">
            <div className="relative w-full max-w-[280px]">
              <div className="relative w-full aspect-square">
                <Image src={person.bgOverlay} alt="" fill className="object-cover" />
                <div className="absolute inset-[15%] overflow-hidden">
                  <Image src={person.image} alt={person.name} fill className="object-cover object-top" />
                </div>
              </div>
              <div className="bg-white rounded-[5px] p-3 shadow-sm w-full relative z-10 -mt-10">
                <p className="text-[16px] font-bold text-accent capitalize tracking-[0.54px] leading-[1.41]">
                  {person.name}
                </p>
                <p className="text-[13px] text-[#333] capitalize tracking-[0.39px] leading-[1.41] whitespace-pre-line">
                  {person.title}
                </p>
              </div>
            </div>
          </div>

          {/* Photo side - Desktop */}
          <div className={`hidden lg:block w-[435px] flex-shrink-0 relative ${activeIndex === 0 ? 'min-h-[480px]' : 'min-h-[417px]'}`}>
            <div className={`absolute left-[27px] top-[34px] overflow-hidden ${activeIndex === 0 ? 'right-[27px] bottom-[95px]' : 'w-[381px] h-[349px]'}`}>
              <Image
                src={person.bgOverlay}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute left-[90px] top-[50px] w-[240px] h-[230px] overflow-hidden">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className={`absolute left-[40px] right-[40px] bg-white rounded-[5px] p-4 shadow-sm z-10 ${activeIndex === 0 ? 'top-[280px]' : 'bottom-[40px]'}`}>
              <p className="text-[18px] font-bold text-accent capitalize tracking-[0.54px] leading-[1.41]">
                {person.name}
              </p>
              <p className="text-[14px] text-[#333] capitalize tracking-[0.39px] leading-[1.41] whitespace-pre-line">
                {person.title}
              </p>
            </div>
          </div>

          {/* Story side */}
          <div className="flex-1 py-8 px-6 lg:pl-0 lg:pr-10">
            {/* Mobile: truncate story with read more */}
            <div className="lg:hidden">
              <p className="text-[14px] text-[#333] leading-[1.2] text-justify whitespace-pre-line line-clamp-6">
                {person.story}
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="text-accent font-medium text-[14px] mt-2"
              >
                Read more
              </button>
            </div>
            {/* Desktop: full story always */}
            <p className="hidden lg:block text-[14px] text-[#333] leading-[1.2] text-justify whitespace-pre-line">
              {person.story}
            </p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {people.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === activeIndex ? "bg-accent" : "bg-[#d9d9d9]"
            }`}
          />
        ))}
      </div>

      {/* Read More Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-[10px] max-w-[500px] w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>
            <p className="text-[18px] font-bold text-accent mb-1">{person.name}</p>
            <p className="text-[13px] text-[#333] whitespace-pre-line mb-4">{person.title}</p>
            <p className="text-[14px] text-[#333] leading-[1.4] text-justify whitespace-pre-line">
              {person.story}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const navodayaImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Navodaya%20Entrance%20Exam.png";
const barefootImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Barefoot%20English%20Training.png";

const options = [
  { value: "navodaya" as const, label: "Navodaya Entrance Exam" },
  { value: "barefoot" as const, label: "Barefoot English Training" },
];

export default function FreeCoachingTabs() {
  const [activeTab, setActiveTab] = useState<"navodaya" | "barefoot">("navodaya");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel = options.find((o) => o.value === activeTab)!.label;

  return (
    <div className="relative z-10">
      {/* Dropdown Selector */}
      <div className="relative mb-6 max-w-[340px] mx-auto" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full bg-white rounded-[8px] px-4 py-3 text-[15px] font-semibold text-[#333] shadow-sm"
        >
          <span>{activeLabel}</span>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
            <path d="M1 1L7 7L13 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-[8px] shadow-md z-50 overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setActiveTab(opt.value); setDropdownOpen(false); }}
                className={`block w-full text-left px-4 py-3 text-[15px] hover:bg-[#f3f9ff] ${
                  activeTab === opt.value ? "text-[#ff8030] font-bold" : "text-[#333]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden">
        {activeTab === "navodaya" ? (
          <>
            <div className="relative w-full h-[200px]">
              <Image src={navodayaImg} alt="Navodaya Entrance Exam" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-primary mb-4">Navodaya Entrance Exam</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[15px] font-bold text-[#333] leading-[1.4]">Currently, in 2026</p>
                  <p className="text-[15px] text-[#333] leading-[1.5]">
                    The foundation is training an additional 23 students in partnership with Multibhashi. We provide offline classroom training for 3 hours each day, ensuring students have sufficient time to focus on each subject effectively.
                  </p>
                </div>
                <hr className="border-[#eee]" />
                <div>
                  <p className="text-[15px] font-bold text-[#333] leading-[1.4]">In 2024-2025</p>
                  <p className="text-[15px] text-[#333] leading-[1.5]">
                    The Dexter Foundation trained over 114 students across four locations. Through partnerships with IN-DEED Foundation and Multibhashi, 67 students were trained in Jodhpur and Sojat. Additionally, in collaboration with Multibhashi, 57 students received training in Kotputli and Hasampur.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative w-full h-[200px] bg-[#f5f5f5]">
              <Image src={barefootImg} alt="Barefoot English Training" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-primary mb-4">Barefoot English Training</h3>
              <p className="text-[15px] text-[#333] leading-[1.5] mb-3">
                In 2023 Dexter Foundation sponsored Online and Offline English language classes for 250 rural students from <span className="font-medium">Rajasthan | Himachal Pradesh | Karnataka | Odisha | Assam</span>
              </p>
              <p className="text-[15px] text-[#333] leading-[1.5] mb-3">
                {`These students come from weaker sections of the society through the NGO, EMP Bindi International Association (formerly Barefoot College International). They studied in different schools in rural areas and were taught English from the basics to improve their spoken and written skills to help them in their academics.`}
              </p>
              <p className="text-[15px] text-[#333] leading-[1.5]">
                The program was a great success helping the students excel in their academic education as well as making them more confident.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const years = [2023, 2024, 2025];
const locations = ["Kotputli, Behror", "Bhatinda, Jodhpur", "Hasampur, Neem ka Thana", "Sojat, Pali"];

interface ProgramTabsProps {
  year?: number;
  activeLocation: string;
  onLocationChange: (location: string) => void;
}

export default function ProgramTabs({ year = 2024, activeLocation, onLocationChange }: ProgramTabsProps) {
  const router = useRouter();
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(`Program Structure - ${year}`);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { label: `Program Structure - ${year}`, sectionId: "program-structure" },
    { label: "Trainers", sectionId: "trainers" },
    { label: "Participant Directory", sectionId: "participant-directory" },
    { label: "PTM", sectionId: "ptm" },
  ];

  function handleTabClick(tab: { label: string; sectionId: string }) {
    setActiveTab(tab.label);
    const el = document.getElementById(tab.sectionId);
    if (el) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const tabBarHeight = document.getElementById("sticky-tabs")?.offsetHeight ?? 0;
      const offset = headerHeight + tabBarHeight + 16;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setYearDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleYearSelect(selectedYear: number) {
    setYearDropdownOpen(false);
    router.push(`/Navodaya-Coaching-${selectedYear}`);
  }

  return (
    <>
      <section className="bg-[#fffbf8] pt-8 px-[150px]">
        {/* Title + Year */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-[36px] font-bold text-primary text-center">
            Navodaya Coaching
          </h1>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
              className="flex items-center gap-2 border border-[#d6dadf] rounded-[5px] px-3 py-1.5 bg-white cursor-pointer"
            >
              <span className="text-[16px] text-black">{year}</span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className={`transition-transform ${yearDropdownOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L8 7L15 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {yearDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-[#d6dadf] rounded-[5px] shadow-md z-50 w-full">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => handleYearSelect(y)}
                    className={`block w-full text-left px-3 py-2 text-[16px] hover:bg-[#f3f9ff] cursor-pointer ${
                      y === year ? "text-primary font-bold" : "text-black"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <div id="sticky-tabs" className="sticky top-[calc(var(--header-height,100px))] z-40 bg-[#fffbf8] border-b-[3px] border-[#e8e8e8] px-[150px]">
        <div className="flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`pb-3 pt-3 text-[18px] relative ${
                activeTab === tab.label
                  ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary"
                  : "text-[#5f6568]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-[#fffbf8] px-[150px]">
        {/* Location Pills */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-6">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => onLocationChange(loc)}
              className={`px-[31px] py-[10px] rounded-full text-[16px] transition-colors ${
                activeLocation === loc
                  ? "bg-accent text-white"
                  : "bg-white border border-[#c1c1c1] text-[#585858] hover:border-[#9cb8d6]"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Location Name */}
        <h2 className="text-[36px] font-bold text-[#333] text-center mb-6">
          {activeLocation}
        </h2>
      </section>
    </>
  );
}

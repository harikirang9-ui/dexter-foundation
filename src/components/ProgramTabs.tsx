"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const years = [2024, 2025];
const yearLabels: Record<number, string> = { 2024: "2024-2025", 2025: "2025-2026" };
const locationsByYear: Record<number, string[]> = {
  2024: ["Kotputli, Behror", "Bhatinda, Jodhpur", "Hasampur, Neem ka Thana", "Sojat, Pali"],
  2025: ["Hasampur, Neem ka Thana"],
};

interface ProgramTabsProps {
  year?: number;
  activeLocation: string;
  onLocationChange: (location: string) => void;
}

export default function ProgramTabs({ year = 2024, activeLocation, onLocationChange }: ProgramTabsProps) {
  const router = useRouter();
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(`Program Structure - ${yearLabels[year] ?? year}`);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  const locations = locationsByYear[year] ?? locationsByYear[2024];

  const tabs = [
    { label: `Program Structure - ${yearLabels[year] ?? year}`, sectionId: "program-structure" },
    { label: "Trainers", sectionId: "trainers" },
    { label: "Participant Directory", sectionId: "participant-directory" },
    { label: "PTM", sectionId: "ptm" },
    { label: "Class videos", sectionId: "class-videos" },
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
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(e.target as Node)) {
        setLocationDropdownOpen(false);
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
      <section className="bg-[#fffbf8] pt-8 px-4 md:px-10 lg:px-[150px]">
        {/* Title + Year */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-[24px] md:text-[36px] font-bold text-primary text-center">
            Navodaya Coaching
          </h1>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
              className="flex items-center gap-2 border border-[#d6dadf] rounded-[5px] px-3 py-1.5 bg-white cursor-pointer"
            >
              <span className="text-[16px] text-black">{yearLabels[year] ?? year}</span>
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
                    {yearLabels[y] ?? y}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop: Location Pills (hidden when only 1 location) */}
        {locations.length > 1 && (
          <div className="hidden md:flex items-center justify-center gap-3 lg:gap-4 mb-6 flex-wrap">
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
        )}

        {/* Mobile: Location Dropdown (hidden when only 1 location) */}
        {locations.length > 1 && (
          <div className="md:hidden mb-4">
            <p className="text-[13px] text-[#666] mb-1.5">Select Region</p>
            <div className="relative" ref={locationDropdownRef}>
              <button
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center justify-between w-full border border-[#d6dadf] rounded-[5px] px-4 py-3 bg-white"
              >
                <span className="text-[14px] text-black">{activeLocation}</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className={`transition-transform ${locationDropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L6 6L11 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {locationDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#d6dadf] rounded-[5px] shadow-md z-50">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => { onLocationChange(loc); setLocationDropdownOpen(false); }}
                      className={`block w-full text-left px-4 py-3 text-[14px] hover:bg-[#f3f9ff] ${
                        activeLocation === loc ? "text-primary font-bold" : "text-black"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Location Name */}
        <h2 className="text-[20px] md:text-[36px] font-bold text-[#333] text-center mb-6">
          {activeLocation}
        </h2>
      </section>

      {/* Sticky Tabs - scrollable on mobile */}
      <div id="sticky-tabs" className="sticky top-[calc(var(--header-height,100px))] z-40 bg-[#fffbf8] border-b-[3px] border-[#e8e8e8] px-4 md:px-10 lg:px-[150px]">
        <div className="flex gap-4 lg:gap-8 lg:justify-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`pb-3 pt-3 text-[13px] md:text-[18px] relative whitespace-nowrap flex-shrink-0 ${
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
    </>
  );
}

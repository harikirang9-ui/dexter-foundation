"use client";

import { useState, useRef, useEffect } from "react";

const years = [2023, 2024, 2025];
const locations = ["Kotputli, Behror", "Bhatinda, Jodhpur", "Hasampur, Neem ka Thana", "Sojat, Pali"];

export default function ProgramTabs() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(`Program Structure - ${2024}`);
  const [activeLocation, setActiveLocation] = useState("Hasampur, Neem ka Thana");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { label: `Program Structure - ${selectedYear}`, sectionId: "program-structure" },
    { label: "Trainers", sectionId: "trainers" },
    { label: "Participant Directory", sectionId: "participant-directory" },
    { label: "PTM", sectionId: "ptm" },
  ];

  function handleTabClick(tab: { label: string; sectionId: string }) {
    setActiveTab(tab.label);
    document.getElementById(tab.sectionId)?.scrollIntoView({ behavior: "smooth" });
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

  function handleYearSelect(year: number) {
    setSelectedYear(year);
    setActiveTab(`Program Structure - ${year}`);
    setYearDropdownOpen(false);
  }

  return (
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
            <span className="text-[16px] text-black">{selectedYear}</span>
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className={`transition-transform ${yearDropdownOpen ? "rotate-180" : ""}`}>
              <path d="M1 1L8 7L15 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {yearDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-[#d6dadf] rounded-[5px] shadow-md z-20 w-full">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className={`block w-full text-left px-3 py-2 text-[16px] hover:bg-[#f3f9ff] cursor-pointer ${
                    year === selectedYear ? "text-primary font-bold" : "text-black"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="relative">
        <div className="flex justify-center gap-8 border-b-[3px] border-[#e8e8e8]">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`pb-3 text-[18px] relative ${
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

      {/* Location Pills */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-6">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setActiveLocation(loc)}
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
  );
}

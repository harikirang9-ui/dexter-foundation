"use client";

import { useState } from "react";

const tabs = ["Program Structure - 2024", "Trainers", "Participant Directory", "PTM"];
const locations = ["Kotputli, Behror", "Bhatinda, Jodhpur", "Hasampur, Neem ka Thana", "Sojat, Pali"];

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState("Program Structure - 2024");
  const [activeLocation, setActiveLocation] = useState("Hasampur, Neem ka Thana");

  return (
    <section className="bg-[#fffbf8] pt-8 px-[150px]">
      {/* Title + Year */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <h1 className="text-[36px] font-bold text-primary text-center">
          Navodaya Coaching
        </h1>
        <div className="flex items-center gap-2 border border-[#d6dadf] rounded-[5px] px-3 py-1.5 bg-white">
          <span className="text-[16px] text-black">2024</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
            <path d="M1 1L8 7L15 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative">
        <div className="flex gap-8 border-b-[3px] border-[#e8e8e8]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[18px] relative ${
                activeTab === tab
                  ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary"
                  : "text-[#5f6568]"
              }`}
            >
              {tab}
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

"use client";

import { useState } from "react";
import type { Student } from "@/data/coaching-data";

interface ParticipantDirectoryProps {
  participants?: Student[];
}

export default function ParticipantDirectory({ participants = [] }: ParticipantDirectoryProps) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = participants.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (participants.length === 0) return null;

  return (
    <section id="participant-directory" className="bg-white py-12 px-4 md:px-10 lg:px-[150px]">
      <h2 className="text-[36px] font-bold text-primary text-center mb-8">
        Participant Directory
      </h2>

      {/* Search */}
      <div className="max-w-[836px] mx-auto mb-6">
        <div className="flex items-center gap-2 border-b border-[#ccc] pb-2 w-[256px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="#828282" strokeWidth="1.5" />
            <path d="M11 11L14.5 14.5" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-[14px] text-[#828282] outline-none bg-transparent w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="max-w-[836px] mx-auto border border-[#ccc] rounded-[10px] overflow-x-auto">
        {/* Header */}
        <div className="bg-[#f9f1ec] grid grid-cols-[80px_1fr_1fr] items-center h-[59px] border-b border-[#ccc]">
          <span className="text-[18px] font-semibold text-black pl-[51px]">Sl No</span>
          <span className="text-[18px] font-semibold text-black pl-[20px]">Student Name</span>
          <span className="text-[18px] font-semibold text-black pl-[20px]">Date of Birth</span>
        </div>

        {/* Rows */}
        {filtered.map((student, i) => (
          <div
            key={student.name}
            className="grid grid-cols-[80px_1fr_1fr] items-center py-3 border-b border-[#eee] last:border-b-0"
          >
            <span className="text-[18px] text-black pl-[51px]">{i + 1}</span>
            <span className="text-[18px] text-black pl-[20px]">{student.name}</span>
            <span className="text-[18px] text-black pl-[20px]">{student.dob}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="w-8 h-8 flex items-center justify-center text-[14px] text-[#828282]">
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-[14px] ${
              currentPage === page
                ? "bg-primary text-white"
                : "text-[#828282] hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <span className="text-[14px] text-[#828282]">...</span>
        <button className="w-8 h-8 flex items-center justify-center text-[14px] text-[#828282]">
          N
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-[14px] text-[#828282]">
          &gt;
        </button>
      </div>
    </section>
  );
}

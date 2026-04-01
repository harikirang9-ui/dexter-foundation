"use client";

import { useState } from "react";
import type { Student } from "@/data/coaching-data";

interface ParticipantDirectoryProps {
  participants?: Student[];
}

function getPaginationRange(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [];
  pages.push(1);
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export default function ParticipantDirectory({ participants = [] }: ParticipantDirectoryProps) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = participants.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPageClamped = Math.min(Math.max(currentPage, 1), totalPages);

  const shownParticipants = filtered.slice(
    (currentPageClamped - 1) * pageSize,
    currentPageClamped * pageSize
  );

  if (participants.length === 0) return null;

  const paginationRange = getPaginationRange(currentPageClamped, totalPages);

  return (
    <section id="participant-directory" className="bg-white py-12 px-4 md:px-10 lg:px-[150px]">
      <h2 className="text-[24px] md:text-[36px] font-bold text-primary text-center mb-8">
        Participant Directory
      </h2>

      {/* Search */}
      <div className="max-w-[836px] mx-auto mb-6">
        <div className="flex items-center gap-2 border-b border-[#ccc] pb-2 w-full md:w-[256px]">
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
      <div className="max-w-[836px] mx-auto border border-[#ccc] rounded-[10px] overflow-hidden">
        {/* Header */}
        <div className="bg-[#f9f1ec] grid grid-cols-[50px_1fr_100px] md:grid-cols-[80px_1fr_1fr] items-center h-[48px] md:h-[59px] border-b border-[#ccc]">
          <span className="text-[13px] md:text-[18px] font-semibold text-black pl-3 md:pl-[51px] whitespace-nowrap">Sl No</span>
          <span className="text-[13px] md:text-[18px] font-semibold text-black pl-2 md:pl-[20px]">Student Name</span>
          <span className="text-[13px] md:text-[18px] font-semibold text-black pl-2 md:pl-[20px]">Date of Birth</span>
        </div>

        {/* Rows */}
        {shownParticipants.map((student, i) => (
          <div
            key={`${student.name}-${student.dob}-${i}`}
            className="grid grid-cols-[50px_1fr_100px] md:grid-cols-[80px_1fr_1fr] items-center py-2.5 md:py-3 border-b border-[#eee] last:border-b-0"
          >
            <span className="text-[13px] md:text-[18px] text-black pl-3 md:pl-[51px]">{(currentPageClamped - 1) * pageSize + i + 1}</span>
            <span className="text-[13px] md:text-[18px] text-black pl-2 md:pl-[20px]">{student.name}</span>
            <span className="text-[13px] md:text-[18px] text-black pl-2 md:pl-[20px]">{student.dob}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 md:gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(currentPageClamped - 1)}
            disabled={currentPageClamped === 1}
            className="w-8 h-8 flex items-center justify-center text-[14px] text-[#828282] disabled:text-[#ccc]"
          >
            &lt;
          </button>

          {paginationRange.map((page, idx) =>
            page === "..." ? (
              <span key={`dots-${idx}`} className="w-8 h-8 flex items-center justify-center text-[14px] text-[#828282]">...</span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page as number)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-[14px] ${
                  currentPageClamped === page
                    ? "bg-primary text-white"
                    : "text-[#828282] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => setCurrentPage(currentPageClamped + 1)}
            disabled={currentPageClamped === totalPages}
            className="w-8 h-8 flex items-center justify-center text-[14px] text-[#828282] disabled:text-[#ccc]"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}

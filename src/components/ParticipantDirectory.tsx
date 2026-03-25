"use client";

import { useState } from "react";

const students = [
  { name: "Neeraj", dob: "11-Aug-2014" },
  { name: "Nisha Saini", dob: "16-May-2015" },
  { name: "Avni Saini", dob: "26-Apr-2015" },
  { name: "Jyoti Saini", dob: "12-Apr-2015" },
  { name: "Ekta", dob: "30-Jun-2014" },
  { name: "Yanshika", dob: "01-Jul-2015" },
  { name: "Sonam", dob: "03-May-2015" },
  { name: "Divya", dob: "26-Jul-2013" },
  { name: "Helant", dob: "01-Jul-2014" },
  { name: "Gunjan Saini", dob: "19-Dec-2014" },
  { name: "Hardik Shekhawat", dob: "30-Jun-2014" },
  { name: "Jay Shree Arya", dob: "12-Jul-2014" },
];

export default function ParticipantDirectory() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white py-12 px-[150px]">
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
      <div className="max-w-[836px] mx-auto border border-[#ccc] rounded-[10px] overflow-hidden">
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

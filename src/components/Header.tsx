"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showSub, setShowSub] = useState(false);

  useEffect(() => {
    function updateHeight() {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setShowSub(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex items-center justify-between px-[150px] py-4 bg-white shadow-sm"
    >
      <Link href="/" className="flex items-center gap-3">
        <Image src={logoUrl} alt="Dexter Foundation" width={120} height={100} />
      </Link>
      <nav className="flex items-center gap-10">
        <Link href="/our-story" className="text-[18px] text-black font-medium hover:text-primary">
          Our Story
        </Link>
        <Link href="/team" className="text-[18px] text-black font-medium hover:text-primary">
          Team
        </Link>

        {/* Our Programs dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
              if (isOpen) setShowSub(false);
            }}
            className="flex items-center gap-1.5 text-[18px] text-black font-medium hover:text-primary"
          >
            Our Programs
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 flex bg-white rounded-lg shadow-lg border border-gray-100 overflow-visible z-50">
              {/* Main menu */}
              <div className="w-[220px] py-2">
                <div
                  onMouseEnter={() => setShowSub(true)}
                  onClick={() => setShowSub((prev) => !prev)}
                  className="flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-gray-50"
                >
                  <span className="text-[16px] font-medium text-accent">Navodaya Coaching</span>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M1 1L6 6L1 11" stroke="#e57c3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <Link
                  href="/barefoot-english-training"
                  onClick={() => { setIsOpen(false); setShowSub(false); }}
                  className="block px-4 py-2.5 text-[16px] font-medium text-black hover:bg-gray-50"
                >
                  Barefoot English Training
                </Link>
              </div>

              {/* Sub-menu for Navodaya Coaching */}
              {showSub && (
                <div
                  className="w-[160px] py-2 border-l border-gray-100"
                  onMouseEnter={() => setShowSub(true)}
                  onMouseLeave={() => setShowSub(false)}
                >
                  {[2023, 2024, 2025].map((year) => (
                    <Link
                      key={year}
                      href={`/Navodaya-Coaching-${year}`}
                      onClick={() => { setIsOpen(false); setShowSub(false); }}
                      className="block px-4 py-2.5 text-[16px] text-black hover:bg-gray-50"
                    >
                      {year}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <Link href="#" className="text-[18px] text-accent font-bold">
          Success Stories
        </Link>
      </nav>
    </header>
  );
}

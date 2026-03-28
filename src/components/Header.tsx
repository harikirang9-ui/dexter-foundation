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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShowSub, setMobileShowSub] = useState(false);

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
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-[150px] py-4">
        {/* Mobile: hamburger + logo */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-1"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image src={logoUrl} alt="Dexter Foundation" width={100} height={80} />
          </Link>
        </div>

        {/* Desktop: logo */}
        <Link href="/" className="hidden lg:flex items-center gap-3">
          <Image src={logoUrl} alt="Dexter Foundation" width={120} height={100} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
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
                if (isOpen) {
                  setIsOpen(false);
                  setShowSub(false);
                } else {
                  setIsOpen(true);
                  setShowSub(false);
                }
              }}
              className="flex items-center gap-1.5 text-[18px] text-black font-medium hover:text-primary"
            >
              Our Programs
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 mt-2 flex flex-col bg-white rounded-lg shadow-lg border border-gray-100 overflow-visible z-50">
                <div className="w-[220px] py-2">
                  <div
                    onClick={() => setShowSub((prev) => !prev)}
                    className="group flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-gray-50"
                  >
                    <span className="text-[16px] font-medium text-black group-hover:text-accent">Navodaya Coaching</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-accent" />
                    </svg>
                  </div>

                  {showSub && (
                    <div className="w-full py-1">
                      {[2024, 2025].map((year) => (
                        <Link
                          key={year}
                          href={`/Navodaya-Coaching-${year}`}
                          onClick={() => { setIsOpen(false); setShowSub(false); }}
                          className="block px-4 py-1.5 text-[16px] text-black hover:bg-gray-50"
                        >
                          {year}
                        </Link>
                      ))}
                    </div>
                  )}

                  <Link
                    href="/barefoot-english-training"
                    onClick={() => { setIsOpen(false); setShowSub(false); }}
                    className="block px-4 py-2.5 text-[16px] font-medium text-black hover:bg-gray-50"
                  >
                    Barefoot English Training
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/success-stories" className="text-[18px] text-black font-medium hover:text-primary">
            Success Stories
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <nav className="flex flex-col gap-1">
            <Link
              href="/our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] text-black font-medium py-3 border-b border-gray-100"
            >
              Our Story
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] text-black font-medium py-3 border-b border-gray-100"
            >
              Team
            </Link>

            {/* Our Programs accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileShowSub((prev) => !prev)}
                className="flex items-center justify-between w-full text-[16px] text-black font-medium py-3"
              >
                Our Programs
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className={`transition-transform ${mobileShowSub ? 'rotate-180' : ''}`}>
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileShowSub && (
                <div className="pl-4 pb-3 flex flex-col gap-1">
                  <p className="text-[14px] font-medium text-[#666] py-1">Navodaya Coaching</p>
                  {[2024, 2025].map((year) => (
                    <Link
                      key={year}
                      href={`/Navodaya-Coaching-${year}`}
                      onClick={() => { setMobileMenuOpen(false); setMobileShowSub(false); }}
                      className="text-[14px] text-black py-1.5 pl-4"
                    >
                      {year}
                    </Link>
                  ))}
                  <Link
                    href="/barefoot-english-training"
                    onClick={() => { setMobileMenuOpen(false); setMobileShowSub(false); }}
                    className="text-[14px] text-black font-medium py-1.5"
                  >
                    Barefoot English Training
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/success-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] text-black font-medium py-3"
            >
              Success Stories
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

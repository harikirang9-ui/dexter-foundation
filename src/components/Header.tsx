"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

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
        <button className="flex items-center gap-1.5 text-[18px] text-black font-medium hover:text-primary">
          Our Programs
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <Link href="#" className="text-[18px] text-accent font-bold">
          Success Stories
        </Link>
      </nav>
    </header>
  );
}

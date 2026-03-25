"use client";

import Image from "next/image";
import Link from "next/link";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[150px] py-4 bg-white">
      <Link href="/" className="flex items-center gap-3">
        <Image src={logoUrl} alt="Dexter Foundation" width={60} height={50} />
        <div className="leading-tight">
          <p className="text-[#546673] text-[28px] font-bold leading-[1.1]" style={{ fontFamily: "'Yaldevi Colombo', sans-serif" }}>
            Dexter
          </p>
          <p className="text-[#546673] text-[18px] leading-[1.1]" style={{ fontFamily: "'Yaldevi Colombo', sans-serif" }}>
            Foundation
          </p>
        </div>
      </Link>
      <nav className="flex items-center gap-10">
        <Link href="#" className="text-[18px] text-black font-medium hover:text-primary">
          Our Story
        </Link>
        <Link href="#" className="text-[18px] text-black font-medium hover:text-primary">
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

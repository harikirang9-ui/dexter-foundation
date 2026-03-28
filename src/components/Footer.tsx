import Image from "next/image";
import Link from "next/link";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#dbd9d7] mt-12">
      <div className="px-4 md:px-10 lg:px-[150px] py-12">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-8">
          {/* Logo */}
          <div className="flex items-start gap-3">
            <Image src={logoUrl} alt="Dexter Foundation" width={140} height={116} />
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[18px] font-semibold text-[#333] mb-2">Contact Us</h4>
            <p className="text-[18px] text-[#333] leading-[28px] max-w-[222px]">
              91 Springboard 512/10, Outer Ring Road, Mahadevpura, Bangalore
            </p>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-[18px] font-semibold text-[#333] mb-2">Overview</h4>
            <div className="flex flex-col text-[18px] text-[#333] leading-[28px]">
              <Link href="/our-story" className="hover:text-primary">Our Story</Link>
              <Link href="/team" className="hover:text-primary">Team</Link>
              <Link href="#" className="hover:text-primary">Our Programs</Link>
              <Link href="/success-stories" className="hover:text-primary">Success Stories</Link>
            </div>
          </div>

          {/* Other Delta Entities */}
          <div>
            <h4 className="text-[18px] font-semibold text-[#333] mb-2">Other Delta Entities</h4>
            <div className="flex flex-col text-[18px] text-[#333] leading-[28px]">
              <a href="https://www.dextercapital.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Dexter Capital Advisors</a>
              <a href="https://www.dexter.ventures/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Dexter Ventures</a>
              <a href="https://discoverventures.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Discover Ventures</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#dbd9d7]" />
      <div className="text-center py-4">
        <p className="text-[16px] text-[#333]">
          © 2025 Dexter Foundation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

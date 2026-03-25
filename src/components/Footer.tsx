import Image from "next/image";
import Link from "next/link";

const logoUrl =
  "https://www.figma.com/api/mcp/asset/c5c4dbd4-248f-4ef6-b963-7f285af99d5c";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#dbd9d7] mt-12">
      <div className="px-[150px] py-12">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex items-start gap-3">
            <Image src={logoUrl} alt="Dexter Foundation" width={87} height={72} />
            <div className="leading-tight mt-1">
              <p className="text-[#546673] text-[45px] font-bold leading-[1.1]" style={{ fontFamily: "'Yaldevi Colombo', sans-serif" }}>
                Dexter
              </p>
              <p className="text-[#546673] text-[29px] leading-[1.1]" style={{ fontFamily: "'Yaldevi Colombo', sans-serif" }}>
                Foundation
              </p>
            </div>
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
              <Link href="#" className="hover:text-primary">Our Story</Link>
              <Link href="#" className="hover:text-primary">Team</Link>
              <Link href="#" className="hover:text-primary">Our Programs</Link>
              <Link href="#" className="hover:text-primary">Success Stories</Link>
            </div>
          </div>

          {/* Other Delta Entities */}
          <div>
            <h4 className="text-[18px] font-semibold text-[#333] mb-2">Other Delta Entities</h4>
            <div className="flex flex-col text-[18px] text-[#333] leading-[28px]">
              <Link href="#" className="hover:text-primary">Dexter Capital Advisors</Link>
              <Link href="#" className="hover:text-primary">Dexter Ventures</Link>
              <Link href="#" className="hover:text-primary">Discover Ventures</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#dbd9d7] mx-[150px]" />
      <div className="text-center py-4">
        <p className="text-[16px] text-[#333]">
          © 2025 Dexter Foundation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

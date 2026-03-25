"use client";

import { useState } from "react";
import Image from "next/image";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

export default function GetInvolvedModal() {
  const [open, setOpen] = useState(false);
  const [contribution, setContribution] = useState("monetary");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-[#444] text-[18px] font-medium px-[36px] py-[13px] rounded-[5px]"
      >
        Get Involved
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-white rounded-[12px] w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Top header with gradient */}
            <div className="relative flex flex-col items-center pt-8 pb-6 px-8 bg-gradient-to-b from-[#ddeaf5] to-white rounded-t-[12px]">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#666] hover:text-black text-[20px] leading-none"
              >
                ✕
              </button>
              <Image src={logoUrl} alt="Dexter Foundation" width={110} height={88} />
              <h2 className="text-[20px] font-bold text-primary mt-3 text-center">
                Contribute to the Dexter Foundation
              </h2>
              <p className="text-[14px] text-[#666] text-center mt-1">
                Join hands with us to mentor, guide, and empower students.
              </p>
            </div>

            {/* Form */}
            <form className="px-8 pb-8 pt-4 space-y-5">
              <div>
                <label className="text-[14px] text-[#333] mb-1 block">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-[14px] text-[#333] mb-1 block">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-[14px] text-[#333] mb-1 block">Phone Number</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] bg-white min-w-[80px]">
                    <span>🇮🇳</span>
                    <svg className="ml-1 w-3 h-3 text-[#666]" fill="none" viewBox="0 0 10 6">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    defaultValue="+91"
                    className="flex-1 border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-[14px] text-[#333] mb-1 block">
                  How do you know Dexter Group or the Foundation?
                </label>
                <div className="relative">
                  <select className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary appearance-none bg-white">
                    <option value=""></option>
                    <option>Social Media</option>
                    <option>Friend / Family</option>
                    <option>Dexter Group Employee</option>
                    <option>Event / Campaign</option>
                    <option>Other</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] pointer-events-none" fill="none" viewBox="0 0 10 6">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-[14px] text-[#333] mb-2 block">
                  How would you like to contribute?
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contribution"
                      value="monetary"
                      checked={contribution === "monetary"}
                      onChange={() => setContribution("monetary")}
                      className="accent-[#ff8030] w-4 h-4"
                    />
                    <span className="text-[15px] text-[#333]">Monetary Contribution</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contribution"
                      value="shramdaan"
                      checked={contribution === "shramdaan"}
                      onChange={() => setContribution("shramdaan")}
                      className="accent-[#ff8030] w-4 h-4"
                    />
                    <span className="text-[15px] text-[#333]">Shramdaan</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-[14px] text-[#333] mb-1 block">Additional Notes / Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary resize-none"
                />
              </div>

              <div className="flex justify-end items-center gap-6 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-[16px] text-[#444] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 text-[16px] text-white font-medium bg-[#ff8030] rounded-[8px] hover:bg-[#e66f20] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

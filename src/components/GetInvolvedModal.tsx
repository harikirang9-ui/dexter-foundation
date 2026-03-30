"use client";

import { useState } from "react";
import Image from "next/image";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

export default function GetInvolvedModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [contribution, setContribution] = useState("");

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("+91");
    setContribution("");
  };

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    phone.trim() !== "+91" &&
    contribution !== "";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-[#444] text-[14px] md:text-[18px] font-medium px-[16px] md:px-[36px] py-[10px] md:py-[13px] rounded-[5px]"
      >
        Get Involved
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div className="bg-white rounded-[12px] w-full max-w-[500px] max-h-[90vh] shadow-xl flex flex-col">
            {submitted ? (
              /* Success / Thank You Screen */
              <div className="relative flex flex-col items-center justify-center px-8 py-16 min-h-[400px]">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-[#666] hover:text-black text-[20px] leading-none"
                >
                  ✕
                </button>
                {/* Checkmark icon */}
                <div className="w-[80px] h-[80px] rounded-full bg-[#3b8ad0] flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-[18px] md:text-[20px] font-bold text-[#2a7ab5] text-center leading-snug">
                  Thank you for showing interest<br />in supporting Dexter Foundation.
                </h2>
                <p className="text-[15px] text-[#444] text-center mt-4">
                  Our team will review your details and connect with you shortly.
                </p>
              </div>
            ) : (
              <>
                {/* Top header with gradient */}
                <div className="relative flex flex-col items-center pt-8 pb-6 px-8 bg-gradient-to-b from-[#ddeaf5] to-white rounded-t-[12px] flex-shrink-0">
                  <button
                    onClick={handleClose}
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

                {/* Scrollable Form */}
                <form
                  className="flex flex-col flex-1 min-h-0"
                  onSubmit={(e) => { e.preventDefault(); if (isFormValid) setSubmitted(true); }}
                >
                  <div className="flex-1 overflow-y-auto px-8 pt-4 pb-4 space-y-5">
                    <div>
                      <label className="text-[14px] text-[#333] mb-1 block">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-[14px] text-[#333] mb-1 block">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-[14px] text-[#333] mb-1 block">Phone Number <span className="text-red-500">*</span></label>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1 border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] bg-white min-w-[80px]">
                          <span>🇮🇳</span>
                          <svg className="ml-1 w-3 h-3 text-[#666]" fill="none" viewBox="0 0 10 6">
                            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
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
                          <option>Referral (friend, colleague, partner)</option>
                          <option>Social Media (LinkedIn, Facebook, Instagram, etc.)</option>
                          <option>Online Search (Google, Bing, etc.)</option>
                          <option>Media Coverage / Press</option>
                          <option>Event / Seminar</option>
                          <option>Community Outreach / Field Visit</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] pointer-events-none" fill="none" viewBox="0 0 10 6">
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label className="text-[14px] text-[#333] mb-2 block">
                        How would you like to contribute? <span className="text-red-500">*</span>
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
                  </div>

                  {/* Sticky bottom buttons */}
                  <div className="flex justify-end items-center gap-6 px-8 py-4 border-t border-[#eee] flex-shrink-0 bg-white rounded-b-[12px]">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-[16px] text-[#444] font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`px-8 py-3 text-[16px] text-white font-medium rounded-[8px] transition-colors ${isFormValid ? "bg-[#ff8030] hover:bg-[#e66f20]" : "bg-[#ccc] cursor-not-allowed"}`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

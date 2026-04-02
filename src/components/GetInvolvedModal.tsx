"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";

const logoUrl =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/df_logo.png";

const countryCodes = [
  { code: "+91", flag: "\u{1F1EE}\u{1F1F3}", name: "India", digits: 10 },
  { code: "+1", flag: "\u{1F1FA}\u{1F1F8}", name: "US", digits: 10 },
  { code: "+44", flag: "\u{1F1EC}\u{1F1E7}", name: "UK", digits: 10 },
  { code: "+971", flag: "\u{1F1E6}\u{1F1EA}", name: "UAE", digits: 9 },
  { code: "+65", flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", digits: 8 },
  { code: "+61", flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", digits: 9 },
  { code: "+49", flag: "\u{1F1E9}\u{1F1EA}", name: "Germany", digits: 11 },
  { code: "+33", flag: "\u{1F1EB}\u{1F1F7}", name: "France", digits: 9 },
  { code: "+81", flag: "\u{1F1EF}\u{1F1F5}", name: "Japan", digits: 10 },
  { code: "+86", flag: "\u{1F1E8}\u{1F1F3}", name: "China", digits: 11 },
  { code: "+966", flag: "\u{1F1F8}\u{1F1E6}", name: "Saudi Arabia", digits: 9 },
  { code: "+974", flag: "\u{1F1F6}\u{1F1E6}", name: "Qatar", digits: 8 },
  { code: "+968", flag: "\u{1F1F4}\u{1F1F2}", name: "Oman", digits: 8 },
  { code: "+977", flag: "\u{1F1F3}\u{1F1F5}", name: "Nepal", digits: 10 },
  { code: "+94", flag: "\u{1F1F1}\u{1F1F0}", name: "Sri Lanka", digits: 9 },
  { code: "+880", flag: "\u{1F1E7}\u{1F1E9}", name: "Bangladesh", digits: 10 },
  { code: "+60", flag: "\u{1F1F2}\u{1F1FE}", name: "Malaysia", digits: 10 },
  { code: "+27", flag: "\u{1F1FF}\u{1F1E6}", name: "South Africa", digits: 9 },
  { code: "+234", flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria", digits: 10 },
  { code: "+254", flag: "\u{1F1F0}\u{1F1EA}", name: "Kenya", digits: 9 },
];

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

export default function GetInvolvedModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contribution, setContribution] = useState("");
  const [howKnow, setHowKnow] = useState("");
  const [message, setMessage] = useState("");
  const [codeDropdownOpen, setCodeDropdownOpen] = useState(false);
  const [codeSearch, setCodeSearch] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [touched, setTouched] = useState<{ email?: boolean; phone?: boolean }>({});
  const codeDropdownRef = useRef<HTMLDivElement>(null);
  const codeSearchRef = useRef<HTMLInputElement>(null);

  const selectedCountry = countryCodes.find((c) => c.code === countryCode) ?? countryCodes[0];

  const filteredCountries = useMemo(() => {
    const q = codeSearch.trim().toLowerCase();
    if (!q) return countryCodes;
    return countryCodes.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.includes(q)
    );
  }, [codeSearch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (codeDropdownRef.current && !codeDropdownRef.current.contains(e.target as Node)) {
        setCodeDropdownOpen(false);
        setCodeSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (codeDropdownOpen && codeSearchRef.current) {
      codeSearchRef.current.focus();
    }
  }, [codeDropdownOpen]);

  // Reset phone when country changes (different digit limits)
  useEffect(() => {
    setPhoneNumber("");
    setTouched((prev) => ({ ...prev, phone: false }));
  }, [countryCode]);

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setSubmitting(false);
    setSubmitError("");
    setFullName("");
    setEmail("");
    setCountryCode("+91");
    setPhoneNumber("");
    setContribution("");
    setHowKnow("");
    setMessage("");
    setTouched({});
    setCodeSearch("");
  };

  function validateEmail(val: string) {
    if (!val.trim()) return "Email is required";
    if (!isValidEmail(val)) return "Enter a valid email address";
    return undefined;
  }

  function validatePhone(val: string) {
    const digitsOnly = val.replace(/\D/g, "");
    if (!digitsOnly) return "Phone number is required";
    if (digitsOnly.length !== selectedCountry.digits) {
      return `Enter a ${selectedCountry.digits}-digit number for ${selectedCountry.name}`;
    }
    return undefined;
  }

  // Only allow digits in the phone input, enforce max length
  function handlePhoneChange(val: string) {
    const digitsOnly = val.replace(/\D/g, "");
    if (digitsOnly.length <= selectedCountry.digits) {
      setPhoneNumber(digitsOnly);
    }
  }

  const emailError = touched.email ? validateEmail(email) : undefined;
  const phoneError = touched.phone ? validatePhone(phoneNumber) : undefined;

  const isFormValid =
    fullName.trim() !== "" &&
    !validateEmail(email) &&
    !validatePhone(phoneNumber) &&
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
              <div className="relative flex flex-col items-center justify-center px-8 py-16 min-h-[400px]">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-[#666] hover:text-black text-[20px] leading-none"
                >
                  ✕
                </button>
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
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setTouched({ email: true, phone: true });
                    if (!isFormValid) return;
                    setSubmitting(true);
                    setSubmitError("");
                    try {
                      const res = await fetch("/api/get-involved", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          fullName,
                          email,
                          countryCode,
                          phoneNumber,
                          contribution,
                          howKnow,
                          message,
                        }),
                      });
                      if (!res.ok) {
                        const data = await res.json().catch(() => null);
                        throw new Error(data?.error || "Failed to submit");
                      }
                      setSubmitted(true);
                    } catch (err: unknown) {
                      const msg = err instanceof Error ? err.message : "Something went wrong.";
                      setSubmitError(msg);
                    } finally {
                      setSubmitting(false);
                    }
                  }}
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
                        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                        className={`w-full border rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary ${emailError ? "border-red-400" : "border-[#ccc]"}`}
                      />
                      {emailError && <p className="text-[12px] text-red-500 mt-1">{emailError}</p>}
                    </div>

                    <div>
                      <label className="text-[14px] text-[#333] mb-1 block">Phone Number <span className="text-red-500">*</span></label>
                      <div className="flex gap-2">
                        {/* Country code dropdown with search */}
                        <div className="relative" ref={codeDropdownRef}>
                          <button
                            type="button"
                            onClick={() => { setCodeDropdownOpen(!codeDropdownOpen); setCodeSearch(""); }}
                            className="flex items-center gap-1 border border-[#ccc] rounded-[6px] px-2 py-3 text-[15px] bg-white min-w-[90px] h-full"
                          >
                            <span>{selectedCountry.flag}</span>
                            <span className="text-[13px] text-[#333]">{selectedCountry.code}</span>
                            <svg className="ml-auto w-3 h-3 text-[#666] flex-shrink-0" fill="none" viewBox="0 0 10 6">
                              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          {codeDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white border border-[#d6dadf] rounded-[6px] shadow-lg z-50 w-[220px]">
                              <div className="p-2 border-b border-[#eee]">
                                <input
                                  ref={codeSearchRef}
                                  type="text"
                                  value={codeSearch}
                                  onChange={(e) => setCodeSearch(e.target.value)}
                                  placeholder="Search country..."
                                  className="w-full border border-[#ddd] rounded-[4px] px-2 py-1.5 text-[13px] outline-none focus:border-primary"
                                />
                              </div>
                              <div className="max-h-[180px] overflow-y-auto">
                                {filteredCountries.length === 0 ? (
                                  <p className="px-3 py-2 text-[13px] text-[#999]">No results</p>
                                ) : (
                                  filteredCountries.map((c) => (
                                    <button
                                      type="button"
                                      key={c.code}
                                      onClick={() => { setCountryCode(c.code); setCodeDropdownOpen(false); setCodeSearch(""); }}
                                      className={`flex items-center gap-2 w-full text-left px-3 py-2 text-[14px] hover:bg-[#f3f9ff] ${
                                        countryCode === c.code ? "text-primary font-bold bg-[#f3f9ff]" : "text-[#333]"
                                      }`}
                                    >
                                      <span>{c.flag}</span>
                                      <span className="truncate">{c.name}</span>
                                      <span className="ml-auto text-[#888] flex-shrink-0">{c.code}</span>
                                    </button>
                                  ))
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 relative">
                          <input
                            type="tel"
                            inputMode="numeric"
                            placeholder={`${selectedCountry.digits} digits`}
                            value={phoneNumber}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                            maxLength={selectedCountry.digits}
                            className={`w-full border rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary ${phoneError ? "border-red-400" : "border-[#ccc]"}`}
                          />
                          {phoneNumber && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#999] pointer-events-none">
                              {phoneNumber.length}/{selectedCountry.digits}
                            </span>
                          )}
                        </div>
                      </div>
                      {phoneError && <p className="text-[12px] text-red-500 mt-1">{phoneError}</p>}
                    </div>

                    <div>
                      <label className="text-[14px] text-[#333] mb-1 block">
                        How do you know Dexter Group or the Foundation?
                      </label>
                      <div className="relative">
                        <select
                          value={howKnow}
                          onChange={(e) => setHowKnow(e.target.value)}
                          className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary appearance-none bg-white"
                        >
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border border-[#ccc] rounded-[6px] px-3 py-3 text-[15px] outline-none focus:border-primary resize-none"
                      />
                    </div>
                  </div>

                  {/* Sticky bottom buttons */}
                  <div className="flex flex-col gap-2 px-8 py-4 border-t border-[#eee] flex-shrink-0 bg-white rounded-b-[12px]">
                    {submitError && <p className="text-[13px] text-red-500 text-center">{submitError}</p>}
                    <div className="flex justify-end items-center gap-6">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="text-[16px] text-[#444] font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={!isFormValid || submitting}
                        className={`px-8 py-3 text-[16px] text-white font-medium rounded-[8px] transition-colors ${isFormValid && !submitting ? "bg-[#ff8030] hover:bg-[#e66f20]" : "bg-[#ccc] cursor-not-allowed"}`}
                      >
                        {submitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
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

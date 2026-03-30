import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PeopleCarousel from "@/components/PeopleCarousel";
import GetInvolvedModal from "@/components/GetInvolvedModal";
import FreeCoachingTabs from "@/components/FreeCoachingTabs";

const heroBgImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/hero%20bg.webp";
const heroKidsImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/hero_kids.webp";
const navodayaImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Navodaya%20Entrance%20Exam.png";
const barefootImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Barefoot%20English%20Training.png";
const communityPeopleImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/community.png?v=2";
const tickIcon = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/tick.png";
const partneringImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Partnering%20for%20Impact.png";
const statsIcon1 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/114%20students%20from%204%20districts%20of%20Rajasthan%20enrolled%20in%20the%20program..png";
const statsIcon2 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/They%20received%20250%2B%20hours%20of%20structured%20training%2C%20including%20topic-based%20classes%2C%20mock%20tests%2C%20and%20OMR-based%20revision%20exams..png";
const statsIcon3 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Parent%E2%80%93Teacher%20meetings%20were%20conducted%20throughout%20to%20keep%20families%20engaged%20and%20motivated..png";

export default function Home() {
  return (
    <>
      <main className="flex-1 bg-[#fffbf8]">
        <div className="page-margin">
          {/* Hero Section */}
          <section className="mt-8 rounded-[12px] overflow-hidden relative h-[200px] md:h-[320px] lg:h-[360px]">
            <Image src={heroBgImg} alt="Hero background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-[40px] lg:px-[60px]">
              <h1 className="text-[20px] md:text-[36px] lg:text-[36px] font-bold text-white max-w-[640px] leading-[1.2]">
                Empowering Rural Students
                <br />
                through Education
              </h1>
              <p className="text-[14px] md:text-[20px] lg:text-[24px] text-white mt-2">
                Changing Lives through Education
              </p>
              <div className="flex gap-3 md:gap-5 mt-6 md:mt-8">
                <Link
                  href="/Navodaya-Coaching-2025"
                  className="bg-[#ff8030] text-white text-[14px] md:text-[18px] font-medium px-[16px] md:px-[25px] py-[10px] md:py-[12px] rounded-[5px] text-center"
                >
                  View Initiatives
                </Link>
                <GetInvolvedModal />
              </div>
            </div>
            <div className="absolute right-10 hidden md:block w-1/2 h-[85%] top-[18%]">
              <Image src={heroKidsImg} alt="Boy and girl students" fill className="object-contain object-right-bottom" />
            </div>
          </section>

          {/* Our Vision */}
          <section className="pt-10 pb-10">
            <h2 className="text-[24px] md:text-[36px] font-bold text-primary mb-4 md:mb-6">Our Vision</h2>
            <p className="text-[16px] md:text-[22px] lg:text-[24px] text-[#333] leading-[1.5] max-w-[1212px]">
              Dexter Foundation is the brain child of our Founder, Devendra Agrawal, who was born in a small village of Rajasthan, Hasampur and discovered education as the single most important life-altering parameter in his life. The foundation is committed to enable rural underprivileged kids to discover education opportunities and experience a huge impact resulting from it.
            </p>
          </section>

          {/* Our Journey Stats */}
          <section className="pb-15">
            <h2 className="text-[24px] md:text-[36px] font-bold text-primary mb-4 md:mb-4">Our Journey</h2>
            <div className="flex items-start gap-5">
              <div className="flex-1 md:flex-none md:pr-12 text-center md:text-left">
                <p className="text-[28px] md:text-[42px] font-bold text-[#333]">350+</p>
                <p className="text-[14px] md:text-[24px] text-[#898989]">Students Trained</p>
              </div>
              <div className="flex-1 md:flex-none border-l border-[#ccc] px-4 md:px-12 text-center md:text-left">
                <p className="text-[28px] md:text-[42px] font-bold text-[#333]">4+</p>
                <p className="text-[14px] md:text-[24px] text-[#898989]">Locations</p>
              </div>
              <div className="flex-1 md:flex-none border-l border-[#ccc] pl-4 md:pl-12 text-center md:text-left">
                <p className="text-[28px] md:text-[42px] font-bold text-[#333]">9k+</p>
                <p className="text-[14px] md:text-[24px] text-[#898989]">Hours of Training</p>
              </div>
            </div>
          </section>
        </div>

        {/* Free Coaching - Full Width */}
        <section className="relative py-10 bg-[#4A749E] overflow-hidden">
          <div className="page-margin">
            <h2 className="text-[24px] md:text-[36px] font-bold text-white text-center mb-6 md:mb-10 relative z-10">
              Free Coaching
            </h2>

            {/* Mobile: Tabbed cards */}
            <div className="md:hidden">
              <FreeCoachingTabs />
            </div>

            {/* Desktop: Full detailed cards */}
            <div className="hidden md:block">
              {/* Navodaya Entrance Exam Card */}
              <div className="bg-white rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden mb-10 relative z-10">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-[357px] h-[250px] lg:h-auto flex-shrink-0 relative">
                    <Image src={navodayaImg} alt="Navodaya Entrance Exam" fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-10">
                    <h3 className="text-[22px] font-bold text-black mb-6">Navodaya Entrance Exam</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[18px] font-bold text-[#333] leading-[1.4]">Currently, in 2026</p>
                        <p className="text-[18px] text-[#333] leading-[1.4]">
                          The foundation is currently training 23 students in partnership with Multibhashi. We provide offline classroom training for 3 hours each day, ensuring students have sufficient time to focus on each subject effectively.
                        </p>
                      </div>
                      <hr className="border-[#eee]" />
                      <div>
                        <p className="text-[18px] font-bold text-[#333] leading-[1.4]">In the year 2025</p>
                        <p className="text-[18px] text-[#333] leading-[1.4]">
                          The Dexter Foundation trained over 114 students across four locations. Through partnerships with IN-DEED Foundation and Multibhashi, 67 students were trained in Jodhpur and Sojat. Additionally, in collaboration with Multibhashi, 57 students received training in Kotputli and Hasampur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barefoot English Training Card */}
              <div className="bg-white rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden relative z-10">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-[357px] h-[250px] lg:h-[405px] flex-shrink-0 relative bg-[#f5f5f5]">
                    <Image src={barefootImg} alt="Barefoot English Training" fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-10">
                    <h3 className="text-[22px] font-bold text-black mb-6">Barefoot English Training</h3>
                    <p className="text-[18px] text-[#333] leading-[1.4] text-justify mb-4">
                      In 2023 Dexter Foundation sponsored Online and Offline English language classes for 250 rural students from <span className="font-medium">Rajasthan | Himachal Pradesh | Karnataka | Odisha | Assam</span>
                    </p>
                    <p className="text-[18px] text-[#333] leading-[1.4] text-justify mb-4">
                      {`These students come from weaker sections of the society through the NGO, EMP Bindi International Association (formerly Barefoot College International). They studied in different schools in rural areas and were taught English from the basics to improve their spoken and written skills to help them in their academics.`}
                    </p>
                    <p className="text-[18px] text-[#333] leading-[1.4] text-justify">
                      The program was a great success helping the students excel in their academic education as well as making them more confident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-margin">
          {/* No, not just a program! It's a community */}
          <section className="bg-white rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] overflow-hidden relative my-10">
          {/* Background community image */}
          <div className="absolute inset-y-0 right-0 w-[500px] hidden md:block">
            <Image src={communityPeopleImg} alt="Community" fill className="object-contain object-right" />
          </div>
          <div className="relative z-10 p-6 md:p-12 max-w-[850px]">
            <h2 className="text-[22px] md:text-[36px] font-bold leading-normal mb-4 md:mb-6">
              <span className="text-primary">{`No, not just a program! `}</span>
              <span className="text-accent">{`It's a community`}</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#333] leading-[1.4] mb-4 md:mb-6">
              Dexter Foundation aims to build a self-sustaining community of learners and mentors. Over the next seven years, we will mentor these students with the goal of nurturing alumni who will continue to grow and lead this community. Our three core objectives are:
            </p>
            <div className="space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <Image src={tickIcon} alt="" width={22} height={22} className="flex-shrink-0" />
                <p className="text-[16px] md:text-[18px] text-[#333] leading-[1.4]">Providing exposure and building confidence</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={tickIcon} alt="" width={22} height={22} className="flex-shrink-0" />
                <p className="text-[16px] md:text-[18px] text-[#333] leading-[1.4]">Offering timely and actionable mentorship</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={tickIcon} alt="" width={22} height={22} className="flex-shrink-0" />
                <p className="text-[16px] md:text-[18px] text-[#333] leading-[1.4]">Delivering free coaching that truly empowers and enables students to succeed</p>
              </div>
            </div>
            <div>
              <p className="text-[16px] md:text-[18px] text-[#333] leading-[1.4]">
                <span className="font-bold">Why do we need Navodaya?</span>
                <br />
                Because we want to utilize existing resources more effectively to build a better future.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey, Our People - Carousel */}
        <PeopleCarousel />

        {/* Partnering for Impact */}
        <section className="py-10">
          <p className="text-[16px] md:text-[24px] text-[#5d5d5d] text-center max-w-[1182px] mx-auto mb-2 leading-[1.3]">
            This initiative reflects our belief that access to <span className="font-bold text-[#272727]">quality education can transform lives</span> and that every child deserves the chance to dream big.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start">
            {/* Left side - image with partners */}
            <div className="flex-shrink-0 relative w-full lg:w-[489px] h-[300px] md:h-[400px] lg:h-[461px]">
              <Image src={partneringImg} alt="Partnering for Impact" fill className="object-contain" />
            </div>

            {/* Right side - stats */}
            <div className="flex-1 pt-6">
              <p className="text-[18px] text-[#333] leading-[1.4] mb-6">
                <span>{`In 2025, The `}</span>
                <span className="font-bold">Dexter Foundation trained </span>
                <span>over </span>
                <span className="font-bold">114 students</span>
                <span>{` across four locations. Through partnerships with IN-DEED Foundation and Multibhashi, `}</span>
                <span className="font-bold">67 students </span>
                <span>{`were trained in Jodhpur and Sojat. Additionally, in collaboration with Multibhashi, `}</span>
                <span className="font-bold">57 students </span>
                <span>received training in Kotputli and Hasampur.</span>
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Image src={statsIcon1} alt="" width={36} height={36} className="mt-1 flex-shrink-0" />
                  <p className="text-[18px] text-black leading-[1.4]">
                    114 students from 4 districts of Rajasthan enrolled in the program.
                  </p>
                </div>
                <hr className="border-[#eee]" />
                <div className="flex items-start gap-4">
                  <Image src={statsIcon2} alt="" width={36} height={36} className="mt-1 flex-shrink-0" />
                  <p className="text-[18px] text-black leading-[1.4]">
                    They received 250+ hours of structured training, including topic-based classes, mock tests, and OMR-based revision exams.
                  </p>
                </div>
                <hr className="border-[#eee]" />
                <div className="flex items-start gap-4">
                  <Image src={statsIcon3} alt="" width={36} height={36} className="mt-1 flex-shrink-0" />
                  <p className="text-[18px] text-black leading-[1.4]">
                    Parent–Teacher meetings were conducted throughout to keep families engaged and motivated.
                  </p>
                </div>
                <hr className="border-[#eee]" />
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

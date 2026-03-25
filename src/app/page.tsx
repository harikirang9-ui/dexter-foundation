import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PeopleCarousel from "@/components/PeopleCarousel";

const heroImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Empowering%20Underpriviledged%20Rural%20Students.png";
const navodayaImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Navodaya%20Entrance%20Exam.png";
const barefootImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Barefoot%20English%20Training.png";
const circleVector = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Free%20Coaching_circle.png";
const communityImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/No%2C%20not%20just%20a%20program%21%20It%27s%20a%20community.png";
const tickIcon = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/tick.png";
const partneringImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Partnering%20for%20Impact.png";
const statsIcon1 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/114%20students%20from%204%20districts%20of%20Rajasthan%20enrolled%20in%20the%20program..png";
const statsIcon2 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/They%20received%20250%2B%20hours%20of%20structured%20training%2C%20including%20topic-based%20classes%2C%20mock%20tests%2C%20and%20OMR-based%20revision%20exams..png";
const statsIcon3 = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/Parent%E2%80%93Teacher%20meetings%20were%20conducted%20throughout%20to%20keep%20families%20engaged%20and%20motivated..png";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#fffbf8]">
        {/* Hero Section */}
        <section className="mx-[148px] mt-6 rounded-[12px] overflow-hidden relative h-[430px]">
          <Image src={heroImg} alt="Empowering Underprivileged Rural Students" fill className="object-cover" priority />
          <div className="absolute inset-0 flex flex-col justify-center pl-[59px]">
            <h1 className="text-[36px] font-bold text-white w-[511px] leading-normal">
              Empowering Underpriviledged Rural Students
            </h1>
            <p className="text-[26px] text-white mt-2">
              Changing Lives through Education
            </p>
            <div className="flex gap-5 mt-8">
              <Link
                href="/Navodaya-Coaching-2024"
                className="bg-[#ff8030] text-white text-[18px] font-medium px-[25px] py-[12px] rounded-[5px] text-center"
              >
                View Initiatives
              </Link>
              <button className="bg-white text-[#444] text-[18px] font-medium px-[36px] py-[13px] rounded-[5px]">
                Get Involved
              </button>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="px-[146px] py-16">
          <h2 className="text-[34px] font-bold text-primary mb-6">Our Vision</h2>
          <p className="text-[36px] text-[#333] leading-[1.4] max-w-[1212px]">
            Dexter Foundation is the brain child of our Founder, Devendra Agrawal, who was born in a small village of Rajasthan, Hasampur and discovered education as the single most important life-altering parameter in his life. The foundation is committed to enable rural underprivileged kids to discover education opportunities and experience a huge impact resulting from it.
          </p>
        </section>

        {/* Our Journey Stats */}
        <section className="px-[146px] pb-12">
          <div className="flex items-center gap-16">
            <h2 className="text-[34px] font-bold text-primary">Our Journey</h2>
            <div className="flex items-center gap-0">
              <div className="pr-12">
                <p className="text-[42px] font-bold text-[#333]">350+</p>
                <p className="text-[24px] text-[#898989]">Students Trained</p>
              </div>
              <div className="border-l border-[#ccc] px-12">
                <p className="text-[42px] font-bold text-[#333]">9</p>
                <p className="text-[24px] text-[#898989]">Locations</p>
              </div>
              <div className="border-l border-[#ccc] pl-12">
                <p className="text-[42px] font-bold text-[#333]">4k+</p>
                <p className="text-[24px] text-[#898989]">Hours of Training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Coaching */}
        <section className="relative py-16 bg-gradient-to-b from-[#d4956a] via-[#c4814f] to-[#b87040]">
          {/* Circle bg decoration */}
          <div className="absolute right-[-50px] top-[-80px] w-[474px] h-[474px] opacity-30">
            <Image src={circleVector} alt="" fill className="object-contain" />
          </div>
          <div className="absolute left-[-80px] bottom-[-60px] w-[252px] h-[252px] opacity-30">
            <Image src={circleVector} alt="" fill className="object-contain" />
          </div>

          <h2 className="text-[34px] font-bold text-white text-center mb-10 relative z-10">
            Free Coaching
          </h2>

          {/* Navodaya Entrance Exam Card */}
          <div className="mx-[220px] bg-white rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden mb-10 relative z-10">
            <div className="flex">
              <div className="w-[357px] h-[383px] flex-shrink-0 relative">
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
          <div className="mx-[220px] bg-white rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] overflow-hidden relative z-10">
            <div className="flex">
              <div className="w-[357px] h-[405px] flex-shrink-0 relative">
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
        </section>

        {/* No, not just a program! It's a community */}
        <section className="mx-[148px] bg-white rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] overflow-hidden relative my-10">
          {/* Background community image */}
          <div className="absolute right-0 top-0 w-[500px] h-full">
            <Image src={communityImg} alt="" fill className="object-cover object-right" />
          </div>
          <div className="relative z-10 p-12 max-w-[850px]">
            <h2 className="text-[36px] font-bold leading-normal mb-6">
              <span className="text-primary">{`No, not just a program! `}</span>
              <span className="text-accent">{`It's a community`}</span>
            </h2>
            <p className="text-[18px] text-[#333] leading-[1.4] mb-6">
              Dexter Foundation aims to build a self-sustaining community of learners and mentors. Over the next seven years, we will mentor these students with the goal of nurturing alumni who will continue to grow and lead this community. Our three core objectives are:
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Image src={tickIcon} alt="" width={22} height={22} />
                <p className="text-[18px] text-[#333] leading-[1.4]">Providing exposure and building confidence</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={tickIcon} alt="" width={22} height={22} />
                <p className="text-[18px] text-[#333] leading-[1.4]">Offering timely and actionable mentorship</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={tickIcon} alt="" width={22} height={22} />
                <p className="text-[18px] text-[#333] leading-[1.4]">Delivering free coaching that truly empowers and enables students to succeed</p>
              </div>
            </div>
            <div>
              <p className="text-[18px] text-[#333] leading-[1.4]">
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
        <section className="px-[145px] py-10">
          <p className="text-[24px] text-[#5d5d5d] text-center max-w-[1182px] mx-auto mb-2 leading-[1.2]">
            This initiative reflects our belief that access to <span className="font-bold text-[#272727]">quality education can transform lives</span> and that every child deserves the chance to dream big.
          </p>

          <div className="flex gap-8 mt-10 items-start">
            {/* Left side - image with partners */}
            <div className="flex-shrink-0 relative w-[489px] h-[461px]">
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
      </main>
      <Footer />
    </>
  );
}

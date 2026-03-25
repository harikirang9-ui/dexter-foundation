import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const devendraImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/team/Devendra%20Agrawal.png";
const anuradhaImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/team/Anuradha%20Agarwal.png";
const sunitaImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/team/Sunita%20Agrawal.png";
const mistakesImg = "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/team/Our%20mistakes%20and%20learning.png";

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#fffbf8]">
        {/* Title */}
        <section className="pt-12 pb-8 px-4 md:px-10 lg:px-[150px]">
          <h1 className="text-[36px] font-bold text-primary text-center mb-4">
            Team
          </h1>
          <p className="text-[24px] text-[#4f4f4f] text-center max-w-[1182px] mx-auto leading-[1.2]">
            With years of experience building Dexter Capital and guiding entrepreneurs, Devendra and Anuradha
            are committed to supporting the Navodaya community with mentorship, resources, and vision.
          </p>
        </section>

        {/* Devendra Agrawal - Image Left, Text Right */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-shrink-0 relative w-full lg:w-[440px] h-[350px] lg:h-[485px]">
              <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[435px] bg-[#d8d8d8] rounded-sm" />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={devendraImg}
                  alt="Devendra Agrawal"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 pt-0 lg:pt-12">
              <h2 className="text-[24px] font-bold text-[#333] mb-1">
                Devendra Agrawal
              </h2>
              <p className="text-[16px] text-[#333] mb-6 leading-[1.4]">
                Founder - Dexter Capital Advisors, Dexter Ventures, Delta Investment Advisors
              </p>
              <div className="text-[18px] text-[#333] leading-[1.4] space-y-4">
                <p>
                  Devendra founded Dexter in early 2013 with a mission to help entrepreneurs scale up smoothly by simplifying investor search, term sheet negotiation and the overall fund raise process. Before Dexter, he served as the CFO of Resonance, a leading education company and led the whole process to raise private equity funding of Rs 100 Cr from a choice of marquee investor groups. He has also worked with a private equity firm, Olympus Capital as an investment professional.
                </p>
                <p>
                  Education: Devendra is a 2005 batch graduate from IIT Bombay and has cleared all three levels of CFA from CFA Institute, USA, AIMR
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Anuradha Agarwal - Text Left, Image Right */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-[24px] font-bold text-[#333] mb-1">
                Anuradha Agarwal
              </h2>
              <p className="text-[16px] text-[#333] mb-6 leading-[1.4]">
                Co-founder of Dexter Capital Advisors, General Partner of Dexter Ventures, Founder of Multibhashi
              </p>
              <div className="text-[18px] text-[#333] leading-[1.4] space-y-4">
                <p>
                  {`Anuradha has over 15 years of experience working with ICICI Bank, Agilent Technologies, Copal Partners, Dexter Capital. She has spent over 10 years as an entrepreneur building Dexter Capital as Co-Founder & Multibhashi as a sole founder. She started Multibhashi in 2015, scaled it to 2mn+ learners, 12k+ trainers, raised 2 rounds of funding, turned it profitable and handed over the reins to a competent team, which is building it profitably.`}
                </p>
                <p>
                  She has a BE in Computer Science (2006), MBA - Finance (2008), CFA (ICFAI University)
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 relative w-full lg:w-[440px] h-[350px] lg:h-[481px]">
              <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[435px] bg-[#d8d8d8] rounded-sm" />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={anuradhaImg}
                  alt="Anuradha Agarwal"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sunita Agrawal - Image Left, Text Right */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-shrink-0 relative w-full lg:w-[440px] h-[350px] lg:h-[489px]">
              <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[435px] bg-[#d8d8d8] rounded-sm" />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={sunitaImg}
                  alt="Sunita Agrawal"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 pt-0 lg:pt-12">
              <h2 className="text-[24px] font-bold text-[#333] mb-1">
                Sunita Agrawal
              </h2>
              <p className="text-[16px] text-[#333] mb-6 leading-[1.4]">
                {`Program Director of Dexter Foundation, Head of HR & Operations, Multibhashi`}
              </p>
              <div className="text-[18px] text-[#333] leading-[1.4] space-y-4">
                <p>
                  {`Sunita has over 10 years of experience working with public sector, L&T and Multibhashi. She worked for two years in the public sector. After a nine-year career break, she resumed her professional journey in 2017 and joined Multibhashi as a Hindi Content Developer.`}
                </p>
                <p>
                  {`Her strong adaptability and commitment helped her grow quickly within the organisation—first as part of the hiring team and eventually into the role of Head of HR. Over the years, she has taken on wider responsibilities, overseeing HR functions, B2C and B2B operations, client project management, and supporting the sales team. With her hands-on approach and deep understanding of people and processes, Sunita plays a key role in ensuring smooth operations and organisational growth at Multibhashi.`}
                </p>
                <p>
                  She has a BE in Electrical (2003)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our mistakes and learning */}
        <section className="mx-4 md:mx-10 lg:mx-[150px] my-10 bg-[#4a749e] rounded-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 px-6 lg:px-12 py-12">
              <h2 className="text-[36px] font-bold text-white mb-6 leading-[1.4]">
                Our mistakes and learning
              </h2>
              <div className="text-[18px] text-white leading-[1.4] text-justify space-y-4">
                <p>
                  {`Running a program to prepare rural Class 5 students for the Navodaya entrance exam brought to light several important challenges and lessons. One of the biggest hurdles was the lack of awareness among both students and parents about the long-term importance of education. Convincing parents to support their childrens' preparation was not always easy, though a few deeply committed parents went to great lengths, even overcoming commuting difficulties, to ensure their children could attend regularly.`}
                </p>
                <p>
                  At the same time, many students initially struggled because they did not fully recognize the value of education, which often reflected in gaps in their foundational learning. Despite this, our teachers showed remarkable dedication, using innovative teaching strategies, practical examples, and engaging methods to bridge these gaps and build confidence.
                </p>
                <p>
                  {`To keep the children motivated, we introduced activities such as learning games, recognition awards, and parent-teacher meetings. These not only boosted the students' enthusiasm but also helped parents understand how their support plays a crucial role in their childrens' success.`}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 relative w-[442px] h-auto min-h-[621px]">
              <Image
                src={mistakesImg}
                alt="Our mistakes and learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

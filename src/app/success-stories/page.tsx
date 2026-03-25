import Header from "@/components/Header";
import Footer from "@/components/Footer";

function VideoPlaceholder() {
  return (
    <div className="w-[372px] h-[597px] rounded-lg bg-[#d9d9d9] flex flex-col items-center justify-center gap-3">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="#888" strokeWidth="2.5" />
        <path d="M20 18L30 24L20 30V18Z" fill="#888" />
        <circle cx="8" cy="12" r="2" fill="#888" />
        <circle cx="40" cy="12" r="2" fill="#888" />
        <circle cx="8" cy="36" r="2" fill="#888" />
        <circle cx="40" cy="36" r="2" fill="#888" />
      </svg>
      <p className="text-[16px] text-[#888] font-medium">Video Coming Soon</p>
    </div>
  );
}

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#fffbf8]">
        {/* Success Stories */}
        <section className="px-[150px] pt-12 pb-10">
          <h1 className="text-[36px] font-bold text-primary text-center mb-3">
            Success Stories
          </h1>
          <p className="text-[18px] text-[#333] text-center mb-10">
            Meet the students who worked hard, cleared the Navodaya entrance, and inspired many more to follow their path.
          </p>
          <div className="flex justify-center gap-[42px]">
            <VideoPlaceholder />
            <VideoPlaceholder />
            <VideoPlaceholder />
          </div>
        </section>

        {/* Voices of Our Teachers */}
        <section className="px-[150px] py-10">
          <h2 className="text-[36px] font-bold text-primary text-center mb-3">
            Voices of Our Teachers
          </h2>
          <p className="text-[18px] text-[#333] text-center mb-10">
            Our dedicated teachers share their experiences, challenges, and the joy of guiding students on this journey.
          </p>
          <div className="flex justify-center gap-[42px]">
            <VideoPlaceholder />
            <VideoPlaceholder />
            <VideoPlaceholder />
          </div>
        </section>

        {/* Student Experiences */}
        <section className="px-[150px] py-10">
          <h2 className="text-[36px] font-bold text-primary text-center mb-3">
            Student Experiences
          </h2>
          <p className="text-[18px] text-[#333] text-center mb-10">
            Hear directly from the participants about how the program shaped their learning and confidence.
          </p>
          <div className="flex justify-center gap-[42px]">
            <VideoPlaceholder />
            <VideoPlaceholder />
            <VideoPlaceholder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import TeacherVideos from "./TeacherVideos";
import StudentVideos from "./StudentVideos";

export default function SuccessStoriesPage() {
  return (
    <>
      <main className="flex-1 bg-[#fffbf8]">
        {/* Student Experiences */}
        <section className="px-4 md:px-10 lg:px-[150px] pt-12 pb-10">
          <h1 className="text-[22px] md:text-[36px] font-bold text-primary text-center mb-3">
            Student Experiences
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#333] text-center mb-10">
            Hear directly from the participants about how the program shaped their learning and confidence.
          </p>
          <StudentVideos />
        </section>

        {/* Voices of Our Teachers */}
        <section className="px-4 md:px-10 lg:px-[150px] py-10">
          <h2 className="text-[22px] md:text-[36px] font-bold text-primary text-center mb-3">
            Voices of Our Teachers
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#333] text-center mb-10">
            Our dedicated teachers share their experiences, challenges, and the joy of guiding students on this journey.
          </p>
          <TeacherVideos />
        </section>
      </main>
      <Footer />
    </>
  );
}

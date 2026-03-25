import Image from "next/image";
import type { SelectedStudent } from "@/data/coaching-data";

const confetti =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/confetti.png";
const bgPattern =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Barefoot%20English%20Training/bgpattern.png";

interface SelectedStudentsProps {
  students?: SelectedStudent[];
}

export default function SelectedStudents({ students = [] }: SelectedStudentsProps) {
  if (students.length === 0) return null;

  return (
    <section className="py-12 px-4 md:px-10 lg:px-[150px]">
      <div className="max-w-[836px] mx-auto relative rounded-[10px] border border-[#b1c8e0] bg-gradient-to-b from-[#f3f9ff] to-white overflow-hidden py-10 px-8">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <Image src={bgPattern} alt="" fill className="object-contain" />
        </div>

        {/* Confetti decorations */}
        <div className="absolute -left-[20px] -top-[10px] w-[180px] h-[168px] rotate-[11deg] opacity-60">
          <Image src={confetti} alt="" fill className="object-contain" />
        </div>
        <div className="absolute -right-[20px] -top-[10px] w-[180px] h-[168px] rotate-[18deg] opacity-60">
          <Image src={confetti} alt="" fill className="object-contain" />
        </div>

        <h3 className="text-[24px] font-bold text-primary text-center mb-10 relative z-10">
          Selected Students
        </h3>

        <div className="flex flex-wrap items-end justify-center gap-12 relative z-10">
          {students.map((student) => (
            <div key={student.name} className="flex flex-col items-center gap-3">
              <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[18px] font-semibold text-[#333] capitalize tracking-[0.54px]">
                {student.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* View More */}
      <div className="text-center mt-6">
        <button className="text-[18px] font-bold text-accent underline">
          View More
        </button>
      </div>
    </section>
  );
}

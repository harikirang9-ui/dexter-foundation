import Image from "next/image";

const student1 =
  "https://www.figma.com/api/mcp/asset/662dcc43-84e9-44e8-84fd-f466218f0feb";
const student2 =
  "https://www.figma.com/api/mcp/asset/5468c18e-153a-45c7-a94f-7155afde63aa";
const student3 =
  "https://www.figma.com/api/mcp/asset/93c83cdc-55c4-4608-a538-c6e9b435c52b";
const confetti =
  "https://www.figma.com/api/mcp/asset/03ca2ca4-640b-490b-8d91-eb6023377858";
const bgPattern =
  "https://www.figma.com/api/mcp/asset/29c329d1-43b5-4d8e-9429-d208ae2c1371";

const selectedStudents = [
  { name: "Ritesh Meena", image: student1 },
  { name: "Shagun Tanwar", image: student2 },
  { name: "Vihan Meena", image: student3 },
];

export default function SelectedStudents() {
  return (
    <section className="py-12 px-[150px]">
      <div className="max-w-[836px] mx-auto relative rounded-[10px] border border-[#b1c8e0] bg-gradient-to-b from-[#f3f9ff] to-white overflow-hidden py-10 px-8">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image src={bgPattern} alt="" fill className="object-cover" />
        </div>

        {/* Confetti decorations */}
        <div className="absolute -left-[80px] -top-[40px] w-[300px] h-[280px] rotate-[11deg] opacity-60">
          <Image src={confetti} alt="" fill className="object-cover" />
        </div>
        <div className="absolute -right-[80px] -top-[40px] w-[300px] h-[280px] rotate-[18deg] opacity-60">
          <Image src={confetti} alt="" fill className="object-cover" />
        </div>

        <h3 className="text-[26px] font-bold text-primary text-center mb-10 relative z-10">
          Selected Students
        </h3>

        <div className="flex items-end justify-center gap-12 relative z-10">
          {selectedStudents.map((student) => (
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

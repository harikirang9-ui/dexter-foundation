import Image from "next/image";

const trainer1 =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%201.png";
const trainer2 =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%202.png";

const trainers = [
  { name: "Bintu Kumar Sharma", image: trainer1 },
  { name: "Seema", image: trainer2 },
];

export default function Trainers() {
  return (
    <section className="bg-white py-12 px-[150px]">
      <h2 className="text-[36px] font-bold text-primary text-center mb-10">
        Trainers
      </h2>
      <div className="flex items-start justify-center gap-12">
        {trainers.map((trainer) => (
          <div key={trainer.name} className="flex flex-col items-center gap-3">
            <div className="relative w-[255px] h-[261px] bg-[#d8d8d8] overflow-hidden">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[20px] font-semibold text-black text-center">
              {trainer.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

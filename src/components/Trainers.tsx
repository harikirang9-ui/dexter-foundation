import Image from "next/image";
import type { Trainer } from "@/data/coaching-data";

interface TrainersProps {
  trainers?: Trainer[];
}

export default function Trainers({ trainers = [] }: TrainersProps) {
  if (trainers.length === 0) return null;

  return (
    <section id="trainers" className="bg-white py-12 px-4 md:px-10 lg:px-[150px]">
      <h2 className="text-[36px] font-bold text-primary text-center mb-10">
        Trainers
      </h2>
      <div className="flex flex-wrap items-start justify-center gap-12">
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
            <p className="text-[18px] font-semibold text-black text-center">
              {trainer.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

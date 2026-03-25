import Image from "next/image";

const heroImg =
  "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/hasampur%20hero%20img.png";

export default function HeroImage() {
  return (
    <section className="px-[150px] mb-8">
      <div className="relative w-full h-[468px] rounded-[20px] overflow-hidden">
        <Image
          src={heroImg}
          alt="Classroom at Hasampur, Neem ka Thana"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]" />
      </div>
    </section>
  );
}

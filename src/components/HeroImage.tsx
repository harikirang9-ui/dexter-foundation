import Image from "next/image";

interface HeroImageProps {
  images?: string[];
}

export default function HeroImage({ images = [] }: HeroImageProps) {
  if (images.length === 0) return null;

  return (
    <section id="program-structure" className="px-4 md:px-10 lg:px-[150px] mb-8">
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[468px] rounded-[20px] overflow-hidden">
        <Image
          src={images[0]}
          alt="Program Structure"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-accent" : "bg-[#d9d9d9]"}`}
          />
        ))}
      </div>
    </section>
  );
}

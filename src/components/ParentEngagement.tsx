import Image from "next/image";

const img1 =
  "https://www.figma.com/api/mcp/asset/d9ef553d-89f9-478c-87cf-357c8fdd5980";
const img2 =
  "https://www.figma.com/api/mcp/asset/4083d43d-4d2e-4719-a558-2ecbd908b40e";
const img3 =
  "https://www.figma.com/api/mcp/asset/e5114d83-2e6e-4177-9bd3-24d1d45ebf3b";

const playIcon =
  "https://www.figma.com/api/mcp/asset/bd16f4e8-6c64-40c8-a1b3-0dcaf32c9114";

const images = [img1, img2, img3];

export default function ParentEngagement() {
  return (
    <section className="bg-[#fffbf8] py-12 px-[150px]">
      <h2 className="text-[36px] font-bold text-primary text-center mb-2">
        Engaging Parents, Empowering Students
      </h2>
      <p className="text-[24px] text-muted text-center mb-10">
        Regular PTMs to track progress and build support
      </p>

      <div className="flex gap-[42px]">
        {images.map((img, i) => (
          <div key={i} className="relative w-[372px] h-[597px] rounded-lg overflow-hidden group">
            <Image src={img} alt={`PTM Event ${i + 1}`} fill className="object-cover" />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[74px] h-[74px]">
                <Image src={playIcon} alt="Play" fill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

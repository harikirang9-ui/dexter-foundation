import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoachingContent from "@/components/CoachingContent";
import Footer from "@/components/Footer";

const validSlugs: Record<string, number> = {
  "Navodaya-Coaching-2024": 2024,
  "Navodaya-Coaching-2025": 2025,
};

const yearMeta: Record<number, { title: string; description: string }> = {
  2024: {
    title: "Navodaya Coaching 2024-2025 – Free Entrance Exam Training in Rajasthan",
    description:
      "Dexter Foundation trained 114+ students across Kotputli, Jodhpur, Hasampur, and Sojat in 2024-2025 for the Navodaya Vidyalaya entrance exam with free offline coaching.",
  },
  2025: {
    title: "Navodaya Coaching 2025-2026 – Free Entrance Exam Training in Hasampur",
    description:
      "Dexter Foundation's 2025-2026 Navodaya coaching program in Hasampur, Neem ka Thana — free offline training for rural students preparing for Navodaya Vidyalaya entrance exam.",
  },
};

export async function generateStaticParams() {
  return Object.keys(validSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const year = validSlugs[slug];
  const meta = yearMeta[year] ?? yearMeta[2024];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function CoachingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const year = validSlugs[slug];

  if (!year) {
    notFound();
  }

  return (
    <>
      <main className="flex-1">
        <CoachingContent year={year} />
      </main>
      <Footer />
    </>
  );
}

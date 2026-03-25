import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CoachingContent from "@/components/CoachingContent";
import Footer from "@/components/Footer";

const validSlugs: Record<string, number> = {
  "Navodaya-Coaching-2023": 2023,
  "Navodaya-Coaching-2024": 2024,
  "Navodaya-Coaching-2025": 2025,
};

export async function generateStaticParams() {
  return Object.keys(validSlugs).map((slug) => ({ slug }));
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
      <Header />
      <main className="flex-1">
        <CoachingContent year={year} />
      </main>
      <Footer />
    </>
  );
}

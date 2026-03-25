import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProgramTabs from "@/components/ProgramTabs";
import HeroImage from "@/components/HeroImage";
import Trainers from "@/components/Trainers";
import ParticipantDirectory from "@/components/ParticipantDirectory";
import SelectedStudents from "@/components/SelectedStudents";
import ParentEngagement from "@/components/ParentEngagement";
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
        <ProgramTabs year={year} />
        <HeroImage />
        <Trainers />
        <ParticipantDirectory />
        <SelectedStudents />
        <ParentEngagement />
      </main>
      <Footer />
    </>
  );
}

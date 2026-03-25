import Header from "@/components/Header";
import ProgramTabs from "@/components/ProgramTabs";
import HeroImage from "@/components/HeroImage";
import Trainers from "@/components/Trainers";
import ParticipantDirectory from "@/components/ParticipantDirectory";
import SelectedStudents from "@/components/SelectedStudents";
import ParentEngagement from "@/components/ParentEngagement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProgramTabs />
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

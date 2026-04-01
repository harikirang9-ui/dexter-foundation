"use client";

import { useState } from "react";
import { getLocationData } from "@/data/coaching-data";
import ProgramTabs from "./ProgramTabs";
import HeroImage from "./HeroImage";
import Trainers from "./Trainers";
import ParticipantDirectory from "./ParticipantDirectory";
import SelectedStudents from "./SelectedStudents";
import ParentEngagement from "./ParentEngagement";
import ClassVideos from "./ClassVideos";

const defaultLocationByYear: Record<number, string> = {
  2024: "Hasampur, Neem ka Thana",
  2025: "Hasampur, Neem ka Thana",
};

export default function CoachingContent({ year }: { year: number }) {
  const [activeLocation, setActiveLocation] = useState(defaultLocationByYear[year] ?? "Hasampur, Neem ka Thana");
  const data = getLocationData(year, activeLocation);

  return (
    <>
      <ProgramTabs year={year} activeLocation={activeLocation} onLocationChange={setActiveLocation} />
      <HeroImage images={data.heroImages} />
      <Trainers trainers={data.trainers} />
      <ParticipantDirectory participants={data.participants} />
      <SelectedStudents students={data.selectedStudents} />
      <ParentEngagement videos={data.ptmVideos} items={data.ptmItems} />
      <ClassVideos videos={data.classVideos} />
    </>
  );
}

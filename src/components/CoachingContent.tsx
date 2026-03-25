"use client";

import { useState } from "react";
import { getLocationData } from "@/data/coaching-data";
import ProgramTabs from "./ProgramTabs";
import HeroImage from "./HeroImage";
import Trainers from "./Trainers";
import ParticipantDirectory from "./ParticipantDirectory";
import SelectedStudents from "./SelectedStudents";
import ParentEngagement from "./ParentEngagement";

export default function CoachingContent({ year }: { year: number }) {
  const [activeLocation, setActiveLocation] = useState("Hasampur, Neem ka Thana");
  const data = getLocationData(year, activeLocation);

  return (
    <>
      <ProgramTabs year={year} activeLocation={activeLocation} onLocationChange={setActiveLocation} />
      <HeroImage images={data.heroImages} />
      <Trainers trainers={data.trainers} />
      <ParticipantDirectory participants={data.participants} />
      <SelectedStudents students={data.selectedStudents} />
      <ParentEngagement videos={data.ptmVideos} />
    </>
  );
}

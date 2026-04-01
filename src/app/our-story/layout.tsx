import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Dexter Foundation — how Manoj Agrawal's journey from a rural village to IIT Bombay inspired a mission to provide free Navodaya coaching for underprivileged children in Rajasthan.",
  alternates: { canonical: "/our-story" },
};

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}

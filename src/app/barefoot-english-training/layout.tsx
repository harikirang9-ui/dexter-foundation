import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barefoot English Training",
  description:
    "Dexter Foundation sponsored free English language classes for 250 rural students across Rajasthan, Himachal Pradesh, Karnataka, Odisha, and Assam in partnership with Barefoot College International.",
  alternates: { canonical: "/barefoot-english-training" },
};

export default function BarefootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

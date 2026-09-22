import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IAB 2027 | Interpreting Agent Behavior · CHI 2027",
  description: "The proposed second IAB workshop at CHI 2027: exploring HCI and social science methods for understanding agents, humans, and their interactions.",
  icons: { icon: "/iab.svg", shortcut: "/iab.svg" },
  openGraph: {
    title: "IAB 2027 · Interpreting Agent Behavior",
    description: "HCI and social science methods for understanding agents, humans, and their interactions. Proposed second-edition workshop at CHI 2027.",
    type: "website", siteName: "IAB 2027",
  },
  twitter: { card: "summary", title: "IAB 2027 · Interpreting Agent Behavior", description: "HCI and social science methods for understanding agents, humans, and their interactions." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

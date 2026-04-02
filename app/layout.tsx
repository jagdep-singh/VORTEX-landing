import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VORTEX — Local Terminal Coding Agent",
  description:
    "A local terminal coding agent built around an OpenAI-compatible chat API, a Rich-based TUI, and a powerful tool system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

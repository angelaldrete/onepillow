import React from "react";
import Navbar from "./components/Navbar";
import "../styles/main.css";
import { AuthProvider } from "./providers/AuthProvider";
import { Metadata } from "next";
import BaseContainer from "./components/Base/BaseContainer";

export const metadata: Metadata = {
  title: "Next.js + TypeScript + Tailwind CSS",
  description: "Next.js + TypeScript + Tailwind CSS",
};

export default async function RootLayout({
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

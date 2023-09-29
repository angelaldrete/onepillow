import React from "react";
import "../styles/main.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Pillow | Reservation System",
  description:
    "One Pillow is a reservation system for hotels and other hospitality businesses.",
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

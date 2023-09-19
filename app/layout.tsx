"use client";
import React from "react";
import Navbar from "./components/Navbar";
import "../styles/main.css";
import useAuth from "./hooks/useAuth";
import Login from "./login/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = useAuth();

  return (
    <html lang="en">
      <body>
        {isAuthenticated ? (
          <>
            <Navbar />
            <main>{children}</main>
          </>
        ) : (
          <main
            style={{
              margin: "2rem",
            }}
          >
            <Login />
          </main>
        )}
      </body>
    </html>
  );
}

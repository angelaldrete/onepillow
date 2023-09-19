import React from "react";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../providers/AuthProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Navbar />
      <main>{children}</main>
    </AuthProvider>
  );
};

export default layout;

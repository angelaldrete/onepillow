"use client";
import { useSession } from "next-auth/react";
import React from "react";

interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main
        style={{
          margin: "2rem",
        }}
      >
        {children}
      </main>
    );
  }

  return <main>{children}</main>;
};

export default BaseContainer;

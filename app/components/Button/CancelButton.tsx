"use client";
import React from "react";
import Button from ".";
import { useRouter } from "next/navigation";

interface CancelButtonProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLButtonElement>;
}

const CancelButton: React.FC<CancelButtonProps> = ({ children, ref }) => {
  const router = useRouter();

  const navigateBack = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    router.back();
  };

  return (
    <Button className="btn--cancel" onClick={navigateBack} ref={ref}>
      {children}
    </Button>
  );
};

export default CancelButton;

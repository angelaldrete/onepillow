"use client";
import React from "react";
import Button from ".";
import { useRouter } from "next/navigation";

interface CancelButtonProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLButtonElement>;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({
  children,
  ref,
  onClick,
}) => {
  return (
    <Button className="btn--cancel" onClick={onClick} ref={ref}>
      {children}
    </Button>
  );
};

export default CancelButton;

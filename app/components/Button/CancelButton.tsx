import React, { EventHandler } from "react";
import Button from ".";

interface CancelButtonProps {
  children: React.ReactNode;
}

const CancelButton: React.FC<CancelButtonProps> = ({ children }) => {
  const navigateBack = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <Button className="btn--cancel" onClick={navigateBack}>
      {children}
    </Button>
  );
};

export default CancelButton;

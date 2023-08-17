import React from "react";
import Button from ".";

interface SubmitButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, onClick }) => {
  return (
    <Button className="btn--submit" onClick={onClick}>
      {children}
    </Button>
  );
};

export default SubmitButton;

import React from "react";
import Button from ".";

interface SubmitButtonProps {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return <Button className="btn--submit">{children}</Button>;
};

export default SubmitButton;

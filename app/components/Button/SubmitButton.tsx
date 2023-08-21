import React from "react";
import Button from ".";

interface SubmitButtonProps {
  children: React.ReactNode;
  onClick: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => void;
  ref?: React.RefObject<HTMLButtonElement>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onClick,
  ref,
}) => {
  return (
    <Button className="btn--submit" onClick={onClick} ref={ref}>
      {children}
    </Button>
  );
};

export default SubmitButton;

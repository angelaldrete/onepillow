import React, { FormEvent } from "react";

interface ButtonProps {
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  children?: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  ref,
}) => {
  return (
    <button
      className={className ? `btn ${className}` : "btn"}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default Button;

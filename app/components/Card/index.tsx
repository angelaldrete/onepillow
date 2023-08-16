import React from "react";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, style, className }) => {
  return (
    <div className={className ? `${className} card` : "card"} style={style}>
      {children}
    </div>
  );
};

export default Card;

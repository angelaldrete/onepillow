import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
};

export default Card;

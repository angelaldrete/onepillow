import React from "react";
import Link from "next/link";

interface LinkItemProps {
  text: string;
  navbarIdx: number;
  linkIdx: number;
  href: string;
  icon: JSX.Element;
}

const LinkItem: React.FC<LinkItemProps> = ({
  text,
  navbarIdx,
  linkIdx,
  href,
  icon,
}) => {
  return (
    <li
      key={text}
      className="navbar__link-item"
      style={{
        animationDelay: `${(linkIdx + navbarIdx * 3 + 0.1) / 10}s`,
      }}
    >
      <Link href={href}>{icon}</Link>
    </li>
  );
};

export default LinkItem;

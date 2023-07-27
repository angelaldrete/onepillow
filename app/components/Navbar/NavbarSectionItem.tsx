import React from "react";
import LinkItem from "./LinkItem";

interface NavbarSectionItemProps {
  title?: string;
  links?: Link[];
  idx: number;
}

const NavbarSectionItem: React.FC<NavbarSectionItemProps> = ({
  title,
  links,
  idx,
}) => {
  return (
    <li key={title} className="navbar__section-item">
      <ul className="navbar__section-links-list">
        {links?.map((link, linkIdx) => (
          <LinkItem
            key={link.text}
            text={link.text}
            navbarIdx={idx}
            linkIdx={linkIdx}
            href={link.href}
            icon={link.icon}
          />
        ))}
      </ul>
    </li>
  );
};

export default NavbarSectionItem;

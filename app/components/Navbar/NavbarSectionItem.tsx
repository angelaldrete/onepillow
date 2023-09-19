"use client";
import React from "react";
import LinkItem from "./LinkItem";
import { signOut } from "next-auth/react";

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
        {links?.map((link, linkIdx) =>
          link.text === "Logout" ? (
            <li
              key={link.text}
              className="navbar__link-item"
              style={{
                animationDelay: `${(linkIdx * 3 + 0.1) / 10}s`,
              }}
            >
              <a
                onClick={() => signOut()}
                key={link.text}
                style={{ cursor: "pointer" }}
              >
                {link.icon}
              </a>
            </li>
          ) : (
            <LinkItem
              key={link.text}
              text={link.text}
              navbarIdx={idx}
              linkIdx={linkIdx}
              href={link.href ? link.href : ""}
              icon={link.icon}
            />
          )
        )}
      </ul>
    </li>
  );
};

export default NavbarSectionItem;

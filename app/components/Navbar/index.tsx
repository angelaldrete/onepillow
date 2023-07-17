import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faHome,
  faPeopleGroup,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Link from "next/link";

interface Section {
  title?: string;
  imageSrc?: string;
  links?: Link[];
}

interface Link {
  href: string;
  icon: JSX.Element;
  text: string;
}

const sections: Section[] = [
  {
    imageSrc: "/logo.svg",
  },
  {
    title: "Main Menu",
    links: [
      {
        href: "/",
        icon: <FontAwesomeIcon icon={faHome} />,
        text: "Dashboard",
      },
      {
        href: "/calendar",
        icon: <FontAwesomeIcon icon={faCalendar} />,
        text: "Calendar",
      },
      {
        href: "/clients",
        icon: <FontAwesomeIcon icon={faPeopleGroup} />,
        text: "Clients",
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        href: "/account",
        icon: <FontAwesomeIcon icon={faUser} />,
        text: "Profile",
      },
      {
        href: "/settings",
        icon: <FontAwesomeIcon icon={faCog} />,
        text: "Settings",
      },
    ],
  },
  {
    title: "Logout",
    links: [
      {
        href: "/",
        icon: <FontAwesomeIcon icon={faSignOut} />,
        text: "Logout",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["section-list"]}>
        {sections.map((section) => (
          <li key={section.title} className={styles["sections"]}>
            <ul>
              {section.links?.map((link) => (
                <li key={link.text} className={styles.links}>
                  <Link href={link.href}>{link.icon}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

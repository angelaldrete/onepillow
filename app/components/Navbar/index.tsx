import React from "react";
import {
  MdOutlineDashboardCustomize,
  MdPeople,
  MdOutlineAccountCircle,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Logo from "../Logo";

interface Section {
  title?: string;
  links?: Link[];
}

interface Link {
  href: string;
  icon: JSX.Element;
  text: string;
}

const sections: Section[] = [
  {
    title: "Main Menu",
    links: [
      {
        href: "/",
        icon: <MdOutlineDashboardCustomize />,
        text: "Dashboard",
      },
      {
        href: "/calendar",
        icon: <MdOutlineCalendarMonth />,
        text: "Calendar",
      },
      {
        href: "/customers",
        icon: <MdPeople />,
        text: "Customers",
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        href: "/account",
        icon: <MdOutlineAccountCircle />,
        text: "Profile",
      },
      {
        href: "/settings",
        icon: <MdOutlineSettings />,
        text: "Settings",
      },
      {
        href: "/",
        icon: <MdOutlineLogout />,
        text: "Logout",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.logo}>
          <Logo />
        </li>
        {sections.map((section, i) => (
          <li key={section.title} className={styles.sections}>
            <ul>
              {section.links?.map((link, j) => (
                <li
                  key={link.text}
                  className={styles.links}
                  style={{
                    animationDelay: `${(j + i * 3 + 0.1) / 10}s`,
                  }}
                >
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

"use client";
import React from "react";
import {
  MdOutlineDashboardCustomize,
  MdPeople,
  MdOutlineAccountCircle,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineCalendarMonth,
  MdBed,
  MdBook,
} from "react-icons/md";
import Logo from "../Logo";
import NavbarSectionItem from "./NavbarSectionItem";

const navbarSections: NavbarSection[] = [
  {
    title: "Main Menu",
    links: [
      {
        href: "/admin",
        icon: <MdOutlineDashboardCustomize />,
        text: "Dashboard",
      },
      {
        href: "/admin/calendar",
        icon: <MdOutlineCalendarMonth />,
        text: "Calendar",
      },
      {
        href: "/admin/reservations",
        icon: <MdBook />,
        text: "Reservations",
      },
      {
        href: "/admin/rooms",
        icon: <MdBed />,
        text: "Rooms",
      },
      {
        href: "/admin/customers",
        icon: <MdPeople />,
        text: "Customers",
      },
    ],
  },
  {
    title: "Account & Preferences",
    links: [
      {
        href: "/admin/account",
        icon: <MdOutlineAccountCircle />,
        text: "Profile",
      },
      {
        href: "/admin/settings",
        icon: <MdOutlineSettings />,
        text: "Settings",
      },
      {
        icon: <MdOutlineLogout />,
        text: "Logout",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__main-list">
        <li className="navbar__logo-item">
          <Logo />
        </li>
        {navbarSections.map((navbarSection, navbarIdx) => (
          <NavbarSectionItem
            key={navbarSection.title}
            title={navbarSection.title}
            links={navbarSection.links}
            idx={navbarIdx}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {
  MdOutlineDashboardCustomize,
  MdPeople,
  MdOutlineAccountCircle,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineCalendarMonth,
  MdBed,
} from "react-icons/md";
import Logo from "../Logo";
import NavbarSectionItem from "./NavbarSectionItem";

const navbarSections: NavbarSection[] = [
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
        href: "/rooms",
        icon: <MdBed />,
        text: "Rooms",
      },
      {
        href: "/customers",
        icon: <MdPeople />,
        text: "Customers",
      },
    ],
  },
  {
    title: "Account & Preferences",
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

import { ReactElement } from "react";
import { navLinks, navIcons, logoMark } from "../constants";
import { styles } from "../style";
import { NavLink } from "react-router-dom";
const navLink = navLinks.map((nav): ReactElement => {
  return (
    <li
      key={nav.id}
      className="px-10 py-5 text-sm text-gray-800 hover:font-semibold cursor-pointer"
    >
      <NavLink
        to={nav.link}
        className={({ isActive }) => (isActive ? "font-semibold" : "")}
      >
        {nav.title}
      </NavLink>
    </li>
  );
});

const navIcon = navIcons.map((ic): ReactElement => {
  return (
    <li className="w-6 cursor-pointer" key={ic.id}>
      <img src={ic.icon} alt={ic.name} />
    </li>
  );
});

const Header = (): ReactElement => {
  return (
    <header
      className={`${styles.flexSpaceBetween} container h-[80px] border-b border-b-pink-200 sticky top-0 z-[5000] bg-white`}
    >
      <div className="w-16 ">
        <NavLink to="/">
          <img src={logoMark.source} alt={logoMark.name} />
        </NavLink>
      </div>
      <nav>
        <ul
          className={`${styles.flexSpaceBetween} font-normal text-base capitalize`}
        >
          {navLink}
        </ul>
      </nav>
      <div className="w-16">
        <ul
          className={`${styles.flexSpaceBetween} font-normal text-base capitalize`}
        >
          {navIcon}
        </ul>
      </div>
    </header>
  );
};

export default Header;

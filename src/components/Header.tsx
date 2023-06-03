import { ReactElement, useEffect, useState, useRef } from "react";
import { navLinks, navIcons, logoMark } from "../constants";
import { styles } from "../style";
import { NavLink } from "react-router-dom";
import { closeIcon, menuIcon } from "../assets";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const navIcon = navIcons.map((ic): ReactElement => {
  return (
    <li className="w-5 cursor-pointer" key={ic.id}>
      <img src={ic.icon} alt={ic.name} />
    </li>
  );
});

const Header = (): ReactElement => {
  const [navIsActive, setNavIsActive] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const targetElementNavRef = useRef<HTMLElement>(null);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (navIsActive && windowWidth <= 1024) {
      disableBodyScroll(targetElementNavRef.current!);
    }
    if (!navIsActive) {
      enableBodyScroll(targetElementNavRef.current!);
      window.removeEventListener("resize", handleWindowResize);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [navIsActive, windowWidth]);

  const handleNavActivation = () => {
    setNavIsActive((prevState) => !prevState);
  };
  const navLink = navLinks.map((nav): ReactElement => {
    return (
      <li
        key={nav.id}
        className={`text-xl lg:text-sm text-center ${
          navIsActive && windowWidth <= 1024 ? "text-white" : "text-black/50"
        } hover:font-semibold cursor-pointer w-full`}
        onClick={handleNavActivation}
      >
        <NavLink
          to={nav.link}
          className={({ isActive }) =>
            isActive ? "font-semibold w-full block py-4" : "w-full block py-4"
          }
        >
          {nav.title}
        </NavLink>
      </li>
    );
  });

  return (
    <header
      className={`${styles.flexSpaceBetween} h-14 border-b border-b-black-200 fixed top-0 left-0 w-full z-[5000] bg-white`}
    >
      <div className="ml-3">
        <NavLink to="/" className="w-16 block">
          <img src={logoMark.source} alt={logoMark.name} />
        </NavLink>
      </div>
      <nav
        className={`fixed lg:position-unset inset-0 bg-white bg-opacity-70 z-[10000] lg:w-1/3 ${
          !navIsActive && "translate-x-full"
        }  lg:translate-x-0 transition ease-[cubic-bezier(.6,-0.28,.74,.05)] duration-500 ${
          navIsActive && "translate-x-0"
        }`}
        ref={targetElementNavRef}
      >
        <div
          className={`lg:hidden absolute z-50 w-[50px] h-[50px] top-4 right-0 p-4 ${
            !navIsActive && "translate-x-full"
          }  lg:translate-x-0 transition ease-[cubic-bezier(.6,-0.28,.74,.05)] duration-1000
          ${navIsActive && "translate-x-0"}`}
          onClick={handleNavActivation}
        >
          <img src={closeIcon} alt="closeIcon" className="cursor-pointer" />
        </div>
        <ul
          className={`font-normal text-base capitalize flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-black absolute inset-0 lg:position-unset  rounded-s-lg lg:rounded-none my-3 ml-3 lg:margin-unset lg:padding-unset lg:background-unset ${
            !navIsActive && "translate-x-full"
          } lg:translate-x-0 transition ease-[cubic-bezier(.6,-0.28,.74,.05)] duration-1000
          ${navIsActive && "translate-x-0"}`}
        >
          {navLink}
        </ul>
      </nav>
      <div className="mr-3 h-full">
        <div
          className="py-2 h-full lg:hidden opacity-50"
          onClick={handleNavActivation}
        >
          <img
            src={menuIcon}
            alt="menuIcon"
            className="h-full object-cover cursor-pointer"
          />
        </div>
        <ul className="[&>*:nth-child(1)]:mr-4 hidden lg:flex items-center justify-between h-full opacity-60">
          {navIcon}
        </ul>
      </div>
    </header>
  );
};

export default Header;

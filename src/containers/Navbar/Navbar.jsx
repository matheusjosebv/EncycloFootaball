import css from "./Navbar.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { IoIosFootball } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import gsap from "gsap";
import CustomRoute from "../../components/CustomRoute/CustomRoute";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  const rootRef = useRef();
  const routesRef = useRef();
  const searchRef = useRef();
  const mobileMenuRef = useRef();
  const [navbarBg, setNavbarBg] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const scrollDetector = () => {
      window.scrollY > 20 ? setNavbarBg(true) : setNavbarBg(false);
    };
    window.addEventListener("scroll", scrollDetector);

    return () => {
      window.removeEventListener("scroll", scrollDetector);
    };
  }, []);

  const handleSidedar = useCallback(() => {
    setSidebar((prev) => !prev);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(rootRef.current, { y: 0, ease: "expo", duration: 1.5 }, 0.7)
      .to(rootRef.current.firstChild, { opacity: 1 }, 1.05)
      .to(routesRef.current.children, { opacity: 1, stagger: 0.14 }, 1.25)
      .to(searchRef.current.children, { opacity: 1 }, 1.9)
      .to(mobileMenuRef.current, { opacity: 1 }, 1.3);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav
      className={classNames(css.root, { [css.navbarBg]: navbarBg }, { [css.sidebar]: sidebar })}
      ref={rootRef}
    >
      <div className={css.left}>
        <Link to="/" onClick={() => setSidebar(false)}>
          <h1 className={css.logo}>
            <div className={css.text}>EF</div>
            <IoIosFootball className={css.football} />
          </h1>
        </Link>
      </div>

      <div className={css.right}>
        <div className={css.routes} ref={routesRef}>
          <CustomRoute to="/" name="home" className={css.route} />
          <CustomRoute to="/history" name="history" className={css.route} />
          <CustomRoute to="/statistics" name="statistics" className={css.route} />
          <CustomRoute to="/about" name="about" className={css.route} />
        </div>

        <div className={css.search} ref={searchRef}>
          <AiOutlineSearch className={css.icon} />
          <input placeholder="Search here..." className={css.input} />
        </div>

        <div className={css.mobileMenu} ref={mobileMenuRef}>
          {sidebar ? (
            <CgClose className={css.icon} onClick={handleSidedar} />
          ) : (
            <HiMenu className={css.icon} onClick={handleSidedar} />
          )}
        </div>
      </div>

      <div className={css.borderBottom} />
      <Sidebar open={sidebar} toggleMenu={handleSidedar} />
    </nav>
  );
}

import gsap from "gsap";
import classNames from "classnames";
import css from "./Navbar.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link, useResolvedPath } from "react-router-dom";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import CustomRoute from "../../components/CustomRoute/CustomRoute";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { IoIosFootball } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Context from "../../hooks/Context";

export default function Navbar() {
  const rootRef = useRef();
  const logoRef = useRef();
  const routesRef = useRef();
  const searchRef = useRef();
  const navbarRef = useRef();
  const mobileMenuRef = useRef();

  const [sidebar, setSidebar] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [hideSubnav, setHideSubnav] = useState(false);
  const [subnavLabels, setSubnavLabels] = useState([]);
  const { navbarTheme, setNavbarTheme } = useContext(Context);

  const resolvedPath = useResolvedPath();

  useEffect(() => {
    const currentPage = document.querySelectorAll("body");
    if (sidebar) {
      currentPage[0].style.overflow = "hidden";
    } else {
      currentPage[0].style.overflow = "auto";
    }
  }, [sidebar]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const whiteSecs = Array.from(document.querySelectorAll(`[data-nav-color="WHITE"]`));
    const blackSecs = Array.from(document.querySelectorAll(`[data-nav-color="BLACK"]`));
    const redSecs = Array.from(document.querySelectorAll(`[data-nav-color="RED"]`));
    const blueSecs = Array.from(document.querySelectorAll(`[data-nav-color="BLUE"]`));
    const main = Array.from(document.querySelectorAll(`[id="root"]`));

    const setWhiteTheme = () => {
      setNavbarTheme("white");
      gsap.to(main, { background: "#fff" });
    };

    const setBlackTheme = () => {
      setNavbarTheme("black");

      gsap.to(main, { background: "#000" });
    };

    const setRedTheme = () => {
      setNavbarTheme("red");

      gsap.to(main, { background: "#F16262" });
    };

    const setBlueTheme = () => {
      setNavbarTheme("blue");

      gsap.to(main, { background: "#6CBAFF" });
    };

    const redTriggers = [];
    const blueTriggers = [];
    const whiteTriggers = [];
    const blackTriggers = [];

    whiteSecs.forEach((w) => {
      whiteTriggers.push(
        ScrollTrigger.create({
          trigger: w,
          start: "top 30%",
          end: "bottom 30%",
          onEnter: setWhiteTheme,
          onEnterBack: setWhiteTheme,
        })
      );
    });

    blackSecs.forEach((w) => {
      blackTriggers.push(
        ScrollTrigger.create({
          trigger: w,
          start: "top 30%",
          end: "bottom 30%",
          onEnter: setBlackTheme,
          onEnterBack: setBlackTheme,
        })
      );
    });

    redSecs.forEach((w) => {
      redTriggers.push(
        ScrollTrigger.create({
          trigger: w,
          start: "top 30%",
          end: "bottom 30%",
          onEnter: setRedTheme,
          onEnterBack: setRedTheme,
        })
      );
    });

    blueSecs.forEach((w) => {
      blueTriggers.push(
        ScrollTrigger.create({
          trigger: w,
          start: "top 30%",
          end: "bottom 30%",
          onEnter: setBlueTheme,
          onEnterBack: setBlueTheme,
        })
      );
    });

    return () => {
      whiteTriggers.forEach((t) => {
        t.kill();
      });

      blackTriggers.forEach((t) => {
        t.kill();
      });

      redTriggers.forEach((t) => {
        t.kill();
      });

      blueTriggers.forEach((t) => {
        t.kill();
      });
    };
  }, [resolvedPath, setNavbarTheme]);

  const onSubNavClick = useCallback((label) => {
    const navHeight = navbarRef.current.clientHeight;
    const el = document.querySelector(`[data-nav-label="${label}"]`);
    window.scrollTo({ top: el.offsetTop - navHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollDetector;

    window.addEventListener(
      "scroll",
      (scrollDetector = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        st > lastScrollTop ? setHideSubnav(true) : setHideSubnav(false);
        lastScrollTop = st <= 0 ? 0 : st;
      })
    );

    return () => {
      window.removeEventListener("scroll", scrollDetector);
    };
  }, []);

  useEffect(() => {
    const sec = Array.from(document.querySelectorAll("[data-nav-label]"));
    const labels = sec.map((s) => s.getAttribute("data-nav-label"));
    setSubnavLabels(labels);

    return () => {};
  }, [resolvedPath]);

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
      .to(logoRef.current, { opacity: 1 }, 1.05)
      .to(routesRef.current.children, { opacity: 1, stagger: 0.14 }, 1.25)
      .to(searchRef.current.children, { opacity: 1 }, 1.9)
      .to(mobileMenuRef.current, { opacity: 1 }, 1.3);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav
      className={classNames(
        css.root,
        { [css.navbarBg]: navbarBg },
        { [css.redTheme]: navbarTheme === "red" },
        { [css.blueTheme]: navbarTheme === "blue" },
        { [css.whiteTheme]: navbarTheme === "white" }
      )}
      ref={rootRef}
    >
      <nav className={css.navbar} ref={navbarRef}>
        <div
          className={classNames(
            css.gradient,
            { [css.hideGradient]: hideSubnav },
            { [css.activeGradient]: navbarBg && !sidebar }
          )}
        />
        <div className={css.left} ref={logoRef}>
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

        <div className={classNames(css.borderBottom, { [css.hideBorder]: hideSubnav })} />
      </nav>

      <nav className={classNames(css.subnav, { [css.hideSubnav]: hideSubnav })}>
        <div className={classNames(css.sections)}>
          <p className={css.label}>On this page:</p>
          {subnavLabels.map((s, i) => {
            return (
              <p key={i} className={css.section} onClick={() => onSubNavClick(s)}>
                {s}
              </p>
            );
          })}
        </div>
      </nav>

      <Sidebar open={sidebar} toggleMenu={handleSidedar} />
    </nav>
  );
}

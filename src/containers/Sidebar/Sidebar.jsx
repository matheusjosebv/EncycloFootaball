/* eslint-disable react/prop-types */
import { gsap } from "gsap";
import classNames from "classnames";
import css from "./Sidebar.module.scss";
import { useEffect, useRef } from "react";

import CustomRoute from "../../components/CustomRoute/CustomRoute";

export default function Sidebar({ open, toggleMenu }) {
  const startAnim = useRef();
  const routesRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    if (open) {
      open ? startAnim.current.play() : startAnim.current.reverse();
    }
  }, [open]);

  useEffect(() => {
    startAnim.current = gsap.timeline({ paused: true });
    startAnim.current.set(sidebarRef.current, { opacity: 1 });
  }, []);

  return (
    <nav className={classNames(css.root, { [css.open]: open })} ref={sidebarRef}>
      <div className={css.routes} ref={routesRef}>
        <div className={css.routeWrapper}>
          <CustomRoute to="/" name="home" className={css.route} onClick={toggleMenu} />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute to="/history" name="history" className={css.route} onClick={toggleMenu} />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute
            to="/statistics"
            name="statistics"
            className={css.route}
            onClick={toggleMenu}
          />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute to="/about" name="about" className={css.route} onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}

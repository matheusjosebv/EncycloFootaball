/* eslint-disable react/prop-types */
import classNames from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import css from "./CustomGrid.module.scss";

export default function CustomGrid({ className, btnLink, data, animate, hoverColor }) {
  const rootRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl;

    if (animate) {
      tl = gsap
        .timeline({ scrollTrigger: { trigger: rootRef.current, start: "top 55%" } })
        .to(gridRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 1.8,
          stagger: 0.2,
          scale: 1,
          ease: "expo",
        })
        .to(rootRef.current.lastChild, { y: 0, opacity: 1 });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [animate]);

  return (
    <div className={classNames(css.root, className)} ref={rootRef}>
      <div ref={gridRef} className={css.grid}>
        {data.map((item, i) => {
          return (
            <div key={i} className={css.photo}>
              <img className={css.img} src={item.img} />
              <div className={css.gradient}>
                <p>{item.name}</p>
              </div>
              <div className={css.hoverBg} style={{ backgroundColor: hoverColor }} />
            </div>
          );
        })}
      </div>

      <div className={css.readMore}>
        <Link to={btnLink}>
          <button className={css.btn}>Read More</button>
        </Link>
      </div>
    </div>
  );
}

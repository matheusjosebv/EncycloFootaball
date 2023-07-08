/* eslint-disable react/prop-types */
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import css from "./TextHeading.module.scss";

export default function TextHeading({ title, paragraph, className, animate }) {
  const rootRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl;
    const root = rootRef.current;
    if (animate) {
      tl = gsap
        .timeline({ scrollTrigger: { trigger: root, start: "top 75%" } })
        .to(root.children, { y: 0, opacity: 1, duration: 0.66, stagger: 0.17 });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [animate]);

  return (
    <div className={classNames(css.root, className, { [css.animate]: animate })} ref={rootRef}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.paragraph}>{paragraph}</p>
    </div>
  );
}

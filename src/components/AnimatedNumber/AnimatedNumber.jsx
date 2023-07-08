/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import css from "./AnimatedNumber.module.scss";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function AnimatedNumber({ className, start, final, duration, ease }) {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const tl = gsap
      .timeline({ scrollTrigger: { trigger: root, start: "top 75%" } })
      //
      .to(root, {
        y: 0,
        opacity: 1,
        ease: ease,
        innerText: final,
        snap: "innerText",
        duration: duration,
      });

    return () => {
      tl.kill();
    };
  }, [duration, ease, final]);

  return (
    <div ref={rootRef} className={classNames(css.root, className)}>
      {start}
    </div>
  );
}

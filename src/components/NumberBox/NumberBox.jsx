/* eslint-disable react/prop-types */
import classNames from "classnames";
import css from "./NumberBox.module.scss";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function NumberBox({
  className,
  symbol,
  icon,
  final,
  ease,
  duration,
  text,
  animate,
}) {
  const rootRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    let tl;

    if (animate) {
      tl = gsap
        .timeline({ scrollTrigger: { trigger: root, start: "top 70%" } })
        .to(root, { y: 0, opacity: 1 })
        .to(root.children, { opacity: 1, stagger: 0.2 });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [animate]);

  return (
    <div ref={rootRef} className={classNames(css.root, className)}>
      <div className={css.icon}>{icon}</div>
      <div className={css.wrapper}>
        {symbol && <span className={css.symbol}>{symbol}</span>}
        <AnimatedNumber
          className={css.number}
          start={0}
          final={final}
          ease={ease}
          duration={duration}
        />
      </div>
      <p className={css.text}>{text}</p>
      <div className={css.borderBottom} />
    </div>
  );
}

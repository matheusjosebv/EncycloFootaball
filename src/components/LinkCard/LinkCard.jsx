/* eslint-disable react/prop-types */
import classNames from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Media from "../Media/Media";
import css from "./LinkCard.module.scss";

export default function LinkCard({
  className,
  imgSrc,
  title,
  paragraph,
  btnLabel,
  animate,
  rtl,
  horizontal,
}) {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl;
    if (animate) {
      tl = gsap.timeline({ scrollTrigger: { trigger: leftRef.current, start: "top 70%" } });
      tl.to(leftRef.current, { y: 0, opacity: 1 }) //
        .to(rightRef.current.children, { stagger: 0.1, y: 0, opacity: 1 });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [animate]);

  return (
    <div
      className={classNames(
        css.root,
        { [css.rtl]: rtl },
        { [css.horizontal]: horizontal },
        className
      )}
    >
      <div className={css.left} ref={leftRef}>
        <Media className={css.img} source={imgSrc} alt={title} animate />
      </div>
      <div className={css.right} ref={rightRef}>
        <h1 className={css.title}>{title}</h1>
        <p className={css.paragraph}>{paragraph}</p>
        <button className={css.btn}>{btnLabel}</button>
      </div>
    </div>
  );
}

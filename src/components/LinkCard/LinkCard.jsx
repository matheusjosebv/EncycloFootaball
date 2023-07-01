/* eslint-disable react/prop-types */
import classNames from "classnames";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import css from "./LinkCard.module.scss";

export default function LinkCard({ className, imgSrc, title, paragraph, btnLabel, animate, rtl }) {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    let tl;
    if (animate) {
      tl = gsap.timeline();
      tl.to();
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [animate]);

  return (
    <div
      className={classNames(css.root, { [css.animate]: animate }, { [css.rtl]: rtl }, className)}
    >
      <div className={css.left} ref={leftRef}>
        <img className={css.img} src={imgSrc} alt={title} />
      </div>
      <div className={css.right} ref={rightRef}>
        <h1 className={css.title}>{title}</h1>
        <p className={css.paragraph}>{paragraph}</p>
        <button className={css.btn}>{btnLabel}</button>
      </div>
    </div>
  );
}

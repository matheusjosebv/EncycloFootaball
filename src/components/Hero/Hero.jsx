/* eslint-disable react/prop-types */
import gsap from "gsap";
import classNames from "classnames";
import css from "./Hero.module.scss";
import { useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Media from "../Media/Media";

export default function Hero({ className, bgImg, title, paragraph }) {
  const heroRef = useRef();
  const textRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(heroRef.current.firstChild, { opacity: 1, scale: 1, ease: "expo", duration: 1.75 }, 0.2)
      .to(textRef.current.children, { y: 0, opacity: 1, stagger: 0.075, delay: 0.3 })
      .to(scrollRef.current, { opacity: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={classNames(css.root, className)} ref={heroRef}>
      <Media source={bgImg} alt={title} className={css.img} />
      <div className={css.navbarGradient} />

      {(title || paragraph) && (
        <div className={css.text} ref={textRef}>
          <h1 className={css.title}>{title}</h1>
          <p className={css.content}>{paragraph}</p>
        </div>
      )}

      <div className={css.bottom}>
        <div className={css.gradient}>
          <div className={css.scrollDown} ref={scrollRef}>
            <Player
              autoplay
              className={css.icon}
              speed="0.75"
              src="https://assets4.lottiefiles.com/packages/lf20_kxjicwsk.json"
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
}

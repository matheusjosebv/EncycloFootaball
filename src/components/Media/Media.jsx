/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useMemo } from "react";
import css from "./Media.module.scss";
import classNames from "classnames";
// import Pause from "../Pause/Pause";
// import Play from "../Play/Play";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const Media = ({ source, className, animate, alt }) => {
  const [playerState, setPlayerState] = useState(true);

  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const imgRef = useRef(null);

  const toggleVideoPlay = () => {
    setPlayerState((prev) => !prev);
  };

  const isVideo = useMemo(() => source.includes(".mp4"), [source]);

  useEffect(() => {
    const videoEl = videoRef.current;

    if (videoEl) {
      playerState ? videoEl.play() : videoEl.pause();
    }
  }, [playerState]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const img = imgRef.current;
    let tl;
    let imgEl;

    if (animate) {
      tl = gsap
        .timeline({ scrollTrigger: { trigger: root, start: "top 75%" } })
        .to(root, { y: 0, opacity: 1, duration: 1 });
    }

    if (!isVideo) {
      imgEl = gsap
        .timeline({
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart none none reverse",
            scrub: 2,
          },
        })
        .to(img, { y: "0%" });
    }

    return () => {
      if (tl) tl.kill();
      if (imgEl) imgEl.kill();
    };
  }, [animate, isVideo]);

  return (
    <div ref={rootRef} className={classNames(css.root, className, { [css.animate]: animate })}>
      {isVideo ? (
        <div className={css.videoWrapper}>
          <video ref={videoRef} className={css.video} src={source} muted loop />
          {/* <div className={css.controls}>
            <button onClick={toggleVideoPlay}>{playerState ? <Pause /> : <Play />}</button>
          </div> */}
        </div>
      ) : (
        <div className={css.parallax}>
          <img ref={imgRef} className={css.img} src={source} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default Media;

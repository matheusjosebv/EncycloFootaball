/* eslint-disable react/prop-types */
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./CustomCarousel.module.scss";
import { useContext, useEffect } from "react";
import Context from "../../hooks/Context";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

export default function CustomCarousel({ className, data, animate }) {
  const { navbarTheme } = useContext(Context);
  const rootRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
  };

  const color =
    navbarTheme === "white"
      ? "#fff"
      : navbarTheme === "red"
      ? "#f16262"
      : navbarTheme === "blue"
      ? "#6cbaff"
      : "#000";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl;
    const root = rootRef.current;
    if (animate) {
      tl = gsap
        .timeline({ scrollTrigger: { trigger: root, start: "top 75%" } })
        .to(root, { y: 0, opacity: 1, duration: 0.66 });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [animate]);

  return (
    <div ref={rootRef} className={classNames(css.root, className)}>
      <Slider {...settings} className={css.carousel}>
        {data.map((item, i) => {
          return (
            <div key={i} style={{ margin: "0 50px" }}>
              <div className={css.el}>
                <img
                  className={css.img}
                  src={item.img}
                  style={{
                    borderLeft: `20px solid ${color}`,
                    borderRight: `20px solid ${color}`,
                  }}
                />
                <div className={css.content}>
                  <h1 className={css.name}>{item.title}</h1>
                  <p className={css.capacity}>{item.capacity}</p>
                  <p className={css.location}>{item.location}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

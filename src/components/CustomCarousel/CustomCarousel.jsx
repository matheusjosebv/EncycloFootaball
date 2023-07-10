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
import useLayout from "../../hooks/useLayout";

export default function CustomCarousel({ className, data, animate, title, btnLabel, btnHref }) {
  const { navbarTheme } = useContext(Context);
  const rootRef = useRef();
  const layout = useLayout();

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
                    borderLeft: `1.25rem solid ${color}`,
                    borderRight: `1.25rem solid ${color}`,
                  }}
                />
                <div className={css.content}>
                  {layout.mobile && <h1 className={css.name}>{item.name}</h1>}
                  {!layout.mobile && (
                    <>
                      <h1 className={css.name}>{item.name}</h1>
                      {item.capacity && (
                        <p className={css.capacity}>
                          <span>Capacity:</span>
                          {item.capacity}
                        </p>
                      )}
                      {item.location && (
                        <p className={css.location}>
                          <span>Location:</span>
                          {item.location}
                        </p>
                      )}
                      {item.team && (
                        <p className={css.location}>
                          <span>Team:</span>
                          {item.team}
                        </p>
                      )}
                      {item.nationality && (
                        <p className={css.nationality}>
                          <span>Nationality:</span>
                          {item.nationality}
                        </p>
                      )}
                      {item.position && (
                        <p className={css.position}>
                          <span>Position:</span>
                          {item.position}
                        </p>
                      )}
                      {item.titles && (
                        <p className={css.titles}>
                          <span>Titles:</span>
                          {item.titles}
                        </p>
                      )}
                      {item.currentTeam && (
                        <p className={css.currentTeam}>
                          <span>Current Team:</span> {item.currentTeam}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {(title || btnLabel) && (
        <div className={css.callToAction}>
          {title && <h1 className={css.title}>{title}</h1>}

          {btnLabel && (
            <a href={btnHref}>
              <button className={css.btn}>{btnLabel} </button>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

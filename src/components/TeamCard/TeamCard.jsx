/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "classnames";
import css from "./TeamCard.module.scss";

export default function TeamCard({ className, gradient, img, name, titles }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={classNames(css.root, className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className={css.img} src={img} alt={name + "'s flag"} />

      <h1 className={css.name}>{name}</h1>

      <div className={css.titles}>
        {titles.map((i, idx) => (
          <img
            key={idx}
            className={css.trophy}
            src="/src/assets/imgs/trophy.png"
            alt={titles.length + "titles"}
          />
        ))}

        <div
          className={css.gradient}
          style={{
            opacity: isHover ? 1 : 0,
            background: `${gradient}`,
          }}
        />
      </div>
    </div>
  );
}

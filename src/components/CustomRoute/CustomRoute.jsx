/* eslint-disable react/prop-types */
import { useContext } from "react";
import classNames from "classnames";
import Context from "../../hooks/Context";
import css from "./CustomRoute.module.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomRoute({ className, to, name, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const { navbarTheme } = useContext(Context);

  return (
    <div
      className={classNames(
        css.root,
        className,
        { [css.active]: isActive },
        { [css.red]: navbarTheme === "red" },
        { [css.blue]: navbarTheme === "blue" },
        { [css.white]: navbarTheme === "white" }
      )}
    >
      <Link to={to} {...props}>
        <p className={css.route}>{name}</p>
        <div className={css.underline} />
      </Link>
    </div>
  );
}

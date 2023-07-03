import classNames from "classnames";
import css from "./CustomRoute.module.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Context from "../../hooks/Context";
import { useContext } from "react";

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
        { [css.white]: navbarTheme.white },
        { [css.red]: navbarTheme.red },
        { [css.blue]: navbarTheme.blue }
      )}
    >
      <Link to={to} {...props}>
        <p className={classNames(css.route)}>{name}</p>
        <div className={css.underline} />
      </Link>
    </div>
  );
}

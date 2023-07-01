import classNames from "classnames";
import css from "./CustomRoute.module.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomRoute({ className, to, name, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={classNames(css.root, className, { [css.active]: isActive })}>
      <Link to={to} {...props}>
        <p className={classNames(css.route)}>{name}</p>
        <div className={css.underline} />
      </Link>
    </div>
  );
}

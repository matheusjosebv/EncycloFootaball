/* eslint-disable react/prop-types */
import css from "./FooterLink.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function FooterLink({ className, to, children }) {
  return (
    <Link to={to} className={css.root}>
      <p className={classNames(className, css.name)}>{children}</p>
    </Link>
  );
}

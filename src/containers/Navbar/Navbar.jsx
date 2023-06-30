import css from "./Navbar.module.scss";
import { CgClose } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { IoIosFootball } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className={css.root}>
      <div className={css.left}>
        <h1 className={css.logo}>
          <div className={css.text}>EF</div>
          <IoIosFootball className={css.football} />
        </h1>
      </div>

      <div className={css.right}>
        <div className={css.routes}>
          <h3 className={css.route}>Home</h3>
          <h3 className={css.route}>Statistics</h3>
          <h3 className={css.route}>History</h3>
          <h3 className={css.route}>About</h3>
        </div>

        <div className={css.search}>
          <AiOutlineSearch className={css.icon} />
          <input placeholder="Search" className={css.input} />
        </div>

        <div className={css.mobileMenu}>
          <HiMenu className={css.icon} />
          {/* <CgClose className={css.icon} /> */}
        </div>
      </div>

      <div className={css.borderBottom} />
    </nav>
  );
}

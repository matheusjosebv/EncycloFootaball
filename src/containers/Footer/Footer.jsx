import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterLink from "../../components/FooterLink/FooterLink";
import useLayout from "../../hooks/useLayout";
import css from "./Footer.module.scss";

export default function Footer() {
  const layout = useLayout();

  return (
    <footer className={css.footer}>
      <div className={css.links}>
        <div className={css.container}>
          <FooterLink className={css.link} to="/">
            Home
          </FooterLink>
          <FooterLink className={css.link} to="/history">
            Football History
          </FooterLink>
          <FooterLink className={css.link} to="/statistics">
            Statistics
          </FooterLink>
          <FooterLink className={css.link} to="/about">
            About Us
          </FooterLink>
        </div>

        <div className={css.container}>
          <FooterLink className={css.link} to="/players">
            Squad Buider
          </FooterLink>
          <FooterLink className={css.link} to="/managers">
            World Cup History
          </FooterLink>
          <FooterLink className={css.link} to="/stadiums">
            The Football Tactic Evolution
          </FooterLink>
          <FooterLink className={css.link} to="/legendary-moments">
            Curiosities and Fun Facts
          </FooterLink>
        </div>

        <div className={css.container}>
          <FooterLink className={css.link} to="/players">
            Players
          </FooterLink>
          <FooterLink className={css.link} to="/managers">
            Managers
          </FooterLink>
          <FooterLink className={css.link} to="/stadiums">
            Stadiums
          </FooterLink>
          <FooterLink className={css.link} to="/clubs">
            Clubs
          </FooterLink>
          <FooterLink className={css.link} to="/clubs">
            National Teams
          </FooterLink>
          <FooterLink className={css.link} to="/legendary-moments">
            Legendary Moments
          </FooterLink>
        </div>
      </div>

      <div className={css.socialMedias}>
        <FooterLink className={css.link} to="">
          <FaFacebook className={css.icon} /> {(layout.desktopSm || layout.desktopMd) && "Facebook"}
        </FooterLink>
        <FooterLink className={css.link} to="">
          <FaInstagram className={css.icon} />{" "}
          {(layout.desktopSm || layout.desktopMd) && "Instagram"}
        </FooterLink>
        <FooterLink className={css.link} to="">
          <FaYoutube className={css.icon} /> {(layout.desktopSm || layout.desktopMd) && "YouTube"}
        </FooterLink>
        <FooterLink className={css.link} to="">
          <FaTwitter className={css.icon} /> {(layout.desktopSm || layout.desktopMd) && "Twitter"}
        </FooterLink>
      </div>
    </footer>
  );
}

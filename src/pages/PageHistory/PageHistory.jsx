import css from "./PageHistory.module.scss";
import heroImg from "../../assets/imgs/giero-saaski-HPus1oCcOdk-unsplash.jpg";
import aboutImg from "../../assets/imgs/remi-jacquaint-WQEP0mrTD8Y-unsplash.jpg";

import Hero from "../../components/Hero/Hero";
import TextHeading from "../../components/TextHeading/TextHeading";
import Media from "../../components/Media/Media";

export default function PageAbout() {
  return (
    <div className={css.root}>
      <Hero
        bgImg={heroImg}
        title="Football History"
        paragraph="A little bit of our history and purpose studying Football"
      />

      <section className={css.about}>
        <div className={css.container}>
          <TextHeading
            animate
            className={css.textHeading}
            title="Who we are"
            paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
          />

          <Media className={css.img} source={aboutImg} animate alt="football-field" />
        </div>
      </section>
    </div>
  );
}

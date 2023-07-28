import css from "./PageStatistics.module.scss";
import heroImg from "../../assets/imgs/stadiums/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";

import Hero from "../../components/Hero/Hero";
import TextHeading from "../../components/TextHeading/TextHeading";

export default function PageStatistics() {
  return (
    <div className={css.root} data-nav-color="BLACK">
      <Hero
        bgImg={heroImg}
        title="Welcome to our Statistics"
        paragraph="A little bit of our history and purpose studying Football"
      />

      <section className={css.about} data-nav-label="The Beggining" data-nav-color="BLACK">
        <div className={css.container}>
          <TextHeading
            animate
            className={css.textHeading}
            title="Who we are"
            paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
          />
        </div>
      </section>

      <section className={css.about} data-nav-label="Players" data-nav-color="RED">
        <TextHeading
          animate
          className={css.textHeading}
          title="Who we are"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
        <TextHeading
          animate
          className={css.textHeading}
          title="Who we are"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
      </section>
      <section className={css.about} data-nav-label="Clubs" data-nav-color="BLUE">
        <TextHeading
          animate
          className={css.textHeading}
          title="Who we are"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
        <TextHeading
          animate
          className={css.textHeading}
          title="Who we are"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
      </section>
      <section className={css.about} data-nav-label="Stadiums" data-nav-color="WHITE">
        <TextHeading
          animate
          className={css.textHeading}
          title="Who we are"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
        <TextHeading
          animate
          className={css.textHeading}
          title="Who we are"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
      </section>
    </div>
  );
}

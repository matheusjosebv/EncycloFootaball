import css from "./PageHome.module.scss";
// import heroImg from "../../assets/imgs/james-kirkup-LbT_j62t94U-unsplash.jpg";
import heroImg from "../../assets/imgs/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";
import aboutImg from "../../assets/imgs/remi-jacquaint-WQEP0mrTD8Y-unsplash.jpg";
import WCImg from "../../assets/imgs/andy-hall-EZnI8kiqUiQ-unsplash.jpg";

import Hero from "../../components/Hero/Hero";
import TextHeading from "../../components/TextHeading/TextHeading";
import Media from "../../components/Media/Media";
import LinkCard from "../../components/LinkCard/LinkCard";

export default function PageHome() {
  return (
    <div className={css.root}>
      <Hero
        bgImg={heroImg}
        title="EncycloFootball"
        paragraph="Explore football like never before"
      />

      <section className={css.about}>
        <div className={css.container}>
          <TextHeading
            animate
            className={css.textHeading}
            title="Your ultimate source"
            paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
          />

          <Media className={css.img} source={aboutImg} animate alt="football-field" />
        </div>

        <div className={css.topics}>
          <ul>
            <li>Statistics</li>
            <li>History</li>
            <li>Squad Builder</li>
            <li>News</li>
          </ul>
        </div>
      </section>

      <section className={css.statistics}>
        {/* <LinkCard
          animate
          imgSrc={heroImg}
          title="World Cup History"
          paragraph="Read about the incredible history of the biggest football competition in the world"
        />
        <LinkCard
          rlt
          animate
          imgSrc={heroImg}
          title="World Cup History"
          paragraph="Read about the incredible history of the biggest football competition in the world"
        />
        <LinkCard
          animate
          imgSrc={heroImg}
          title="World Cup History"
          paragraph="Read about the incredible history of the biggest football competition in the world"
        /> */}
      </section>

      <section className={css.footballHistory}>
        <div>
          <TextHeading
            title="World Cup History"
            paragraph="Read about the incredible history of the biggest football competition in the world"
          />

          <Media className={css.WCImg} alt="world-cup-image" animate source={WCImg} />
        </div>

        <div>
          <TextHeading
            title="World Cup History"
            paragraph="Read about the incredible history of the biggest football competition in the world"
          />

          <Media className={css.WCImg} alt="world-cup-image" animate source={WCImg} />
        </div>
      </section>

      <section className={css.squadBuilder}></section>
    </div>
  );
}

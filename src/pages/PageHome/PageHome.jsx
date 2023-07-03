import css from "./PageHome.module.scss";
// import heroImg from "../../assets/imgs/james-kirkup-LbT_j62t94U-unsplash.jpg";
import heroImg from "../../assets/imgs/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";
import aboutImg from "../../assets/imgs/remi-jacquaint-WQEP0mrTD8Y-unsplash.jpg";
import WCImg from "../../assets/imgs/andy-hall-EZnI8kiqUiQ-unsplash.jpg";

import Hero from "../../components/Hero/Hero";
import TextHeading from "../../components/TextHeading/TextHeading";
import Media from "../../components/Media/Media";
import LinkCard from "../../components/LinkCard/LinkCard";
import AnimatedNumber from "../../components/AnimatedNumber/AnimatedNumber";

export default function PageHome() {
  return (
    <div className={css.root}>
      <Hero
        bgImg={heroImg}
        title="EncycloFootball"
        paragraph="Explore football like never before"
      />

      <section className={css.about} data-nav-label="Introduction" data-nav-color="BLACK">
        <div className={css.firstWrapper}>
          <TextHeading
            animate
            className={css.textHeading}
            title="Your ultimate source"
            paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
          />

          <Media className={css.img} source={aboutImg} animate alt="football-field" />
        </div>

        <div className={css.secondWrapper}>
          <Media className={css.img} source={aboutImg} animate alt="football-field" />

          <TextHeading
            animate
            className={css.textHeading}
            title="Your ultimate source"
            paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
          />
        </div>

        <div>
          Here you will find:
          <div>
            +
            <AnimatedNumber
              className={css.number}
              start={0}
              final={200}
              ease="expo"
              duration={3.5}
            />
            clubs infos and articles
          </div>
          <div>
            +
            <AnimatedNumber
              className={css.number}
              start={0}
              final={50}
              ease="expo"
              duration={3.5}
            />
            national teams pages
          </div>
          <div>
            +
            <AnimatedNumber
              className={css.number}
              start={0}
              final={500}
              ease="expo"
              duration={3.5}
            />
            player statistics
          </div>
          <div>
            +
            <AnimatedNumber
              className={css.number}
              start={0}
              final={2000}
              ease="expo"
              duration={3.5}
            />
            people collaborations
          </div>
          <div>
            +
            <AnimatedNumber
              className={css.number}
              start={0}
              final={75}
              ease="expo"
              duration={3.5}
            />
            stadium informations
          </div>
        </div>
      </section>

      <section className={css.statistics} data-nav-label="Statistics" data-nav-color="RED">
        <Media className={css.img} source={aboutImg} animate alt="football-field" />

        <TextHeading
          animate
          className={css.textHeading}
          title="Your ultimate source"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />

        <Media className={css.img} source={aboutImg} animate alt="football-field" />

        <TextHeading
          animate
          className={css.textHeading}
          title="Your ultimate source"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
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

      <section
        className={css.footballHistory}
        data-nav-label="Football History"
        data-nav-color="WHITE"
      >
        <TextHeading
          animate
          className={css.textHeading}
          title="Your ultimate source"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />

        <Media className={css.img} source={aboutImg} animate alt="football-field" />

        <TextHeading
          animate
          className={css.textHeading}
          title="Your ultimate source"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />

        <Media className={css.img} source={aboutImg} animate alt="football-field" />
        <div>
          {/* <TextHeading
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

          <Media className={css.WCImg} alt="world-cup-image" animate source={WCImg} /> */}
        </div>
      </section>

      <section className={css.squadBuilder} data-nav-label="Squad Builder" data-nav-color="BLUE">
        <TextHeading
          animate
          className={css.textHeading}
          title="Your ultimate source"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />

        <Media className={css.img} source={aboutImg} animate alt="football-field" />

        <Media className={css.img} source={aboutImg} animate alt="football-field" />

        <TextHeading
          animate
          className={css.textHeading}
          title="Your ultimate source"
          paragraph="Welcome to EncycloFootball, your ultimate source for in-depth articles on football players, stadiums, and everything related to the beautiful game. Discover fascinating stories and insights about your favorite players, iconic stadiums, and the rich history and culture of football. Join us on this exciting journey and explore the world of football like never before!"
        />
      </section>
    </div>
  );
}

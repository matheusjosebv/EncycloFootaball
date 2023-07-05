import css from "./PageHome.module.scss";
// import heroImg from "../../assets/imgs/james-kirkup-LbT_j62t94U-unsplash.jpg";
import tacticImg from "../../assets/imgs/tactic.jpeg";
import heroImg from "../../assets/imgs/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";
import aboutImg from "../../assets/imgs/remi-jacquaint-WQEP0mrTD8Y-unsplash.jpg";
import aboutImg1 from "../../assets/imgs/remi-jacquaint-WQEP0mrTD8Y-unsplash.jpg";
import aboutImg2 from "../../assets/imgs/Best-soccer-celebrations.jpeg";
import aboutImg3 from "../../assets/imgs/david-pisnoy-At5I1OSl_2M-unsplash.jpg";

import Hero from "../../components/Hero/Hero";
import TextHeading from "../../components/TextHeading/TextHeading";
import Media from "../../components/Media/Media";
import LinkCard from "../../components/LinkCard/LinkCard";
import NumberBox from "../../components/NumberBox/NumberBox";

import { IoMdFootball } from "react-icons/io";
import { TbPlayFootball } from "react-icons/tb";
import { MdStadium } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";
import useLayout from "../../hooks/useLayout.jsx";

export default function PageHome() {
  const layout = useLayout();
  console.log(layout);
  // console.log(layout.tabletLg, "tabletLg");
  // console.log(layout.desktopSm, "desktopSm");

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
            paragraph="Welcome to EncycloFootball, your ultimate destination for football. Whether you're a lifelong fan or just starting to explore the sport, this website is designed to be your go-to resource for the latest news, in-depth analysis, and captivating stories from the world of British football. Our aim is to immerse you in the passion, history, and excitement of the beautiful game that has captivated millions around the globe."
          />

          <Media className={css.img} source={aboutImg1} animate alt="football-field" />
        </div>

        <div className={css.secondWrapper}>
          <TextHeading
            animate
            className={css.textHeading}
            title="Uncover the Rich Heritage of Football"
            paragraph="Prepare to embark on a journey through the rich heritage of football. From the hallowed grounds of historic stadiums to the legendary players who have graced the pitch, this website is dedicated to celebrating the traditions, rivalries, and triumphs that have shaped British football. Join us as we dive deep into the archives, unearthing iconic moments and reliving the glory of the past while keeping a keen eye on the present and future of the sport."
          />

          <Media className={css.img} source={aboutImg2} animate alt="football-field" />
        </div>

        <div className={css.thirdWrapper}>
          <TextHeading
            animate
            className={css.textHeading}
            title="Embrace the Magic "
            paragraph="It's more than just a sport; it's a captivating blend of skill, passion, and unforgettable moments. Our website invites you to immerse yourself in the magic of football. From the intense rivalries that fuel derby matches to the spine-tingling atmosphere of packed stadiums, we strive to capture and convey the essence of this remarkable sport. Join us as we celebrate the triumphs, honor the legends, and revel in the sheer joy that British football brings to fans all around the world."
          />

          <Media className={css.img} source={aboutImg3} animate alt="football-field" />
        </div>

        <div className={css.forthWrapper}>
          <h1 className={css.title}>Here you will find:</h1>

          <div className={css.topics}>
            <NumberBox
              className={css.topic}
              icon={<IoMdFootball />}
              symbol="+"
              final={200}
              text="National teams pages"
              ease="expo"
              duration={4}
              animate
            />
            <NumberBox
              className={css.topic}
              icon={<TbPlayFootball />}
              symbol="+"
              final={500}
              text="Players statistics"
              ease="expo"
              duration={4}
              animate
            />
            <NumberBox
              className={css.topic}
              icon={<BsFillFlagFill />}
              symbol="+"
              final={75}
              text="National teams pages"
              ease="expo"
              duration={4}
              animate
            />
            <NumberBox
              className={css.topic}
              icon={<MdStadium />}
              symbol="+"
              final={125}
              text="Stadiums informations"
              ease="expo"
              duration={4}
              animate
            />
            <NumberBox
              className={css.topic}
              icon={<FaPeopleArrows />}
              symbol="+"
              final={2000}
              text="People collaborations"
              ease="expo"
              duration={4}
              animate
            />
            <NumberBox
              className={css.topic}
              icon={<IoMdFootball />}
              symbol="+"
              final={200}
              text="National teams pages"
              ease="expo"
              duration={4}
              animate
            />
          </div>
        </div>
      </section>

      <section className={css.statistics} data-nav-label="Statistics" data-nav-color="RED">
        <div className={css.linkCards}>
          <LinkCard
            animate
            imgSrc={heroImg}
            className={css.linkCard}
            title="World Cup History"
            paragraph="Read about the incredible history of the biggest football competition in the world"
            btnLabel="Read more"
            horizontal={(layout.tabletLg || layout.desktopSm) && true}
          />
          <LinkCard
            rtl
            animate
            horizontal={(layout.tabletLg || layout.desktopSm) && true}
            imgSrc={tacticImg}
            className={css.linkCard}
            btnLabel="Read more"
            title="The Football Tactical Evolution"
            paragraph="Read about the incredible history of the biggest football competition in the world"
          />
          <LinkCard
            animate
            horizontal={(layout.tabletLg || layout.desktopSm) && true}
            imgSrc={heroImg}
            className={css.linkCard}
            btnLabel="Read more"
            title="Legendary Moments"
            paragraph="Read about the incredible history of the biggest football competition in the world"
          />
        </div>

        <div className={css.carousels}>
          {/* <Carousel className={css.carousel} data={}/> */}
          {/* <Carousel className={css.carousel} data={}/> */}
          {/* <Carousel className={css.carousel} data={}/> */}
        </div>
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

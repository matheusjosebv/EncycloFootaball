import gsap from "gsap";
import css from "./PageHome.module.scss";
import useLayout from "../../hooks/useLayout.jsx";

import Hero from "../../components/Hero/Hero";
import Media from "../../components/Media/Media";
import LinkCard from "../../components/LinkCard/LinkCard";
import NumberBox from "../../components/NumberBox/NumberBox";
import TextHeading from "../../components/TextHeading/TextHeading";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";

import tacticImg from "../../assets/imgs/tactic.jpeg";
import heroImg from "../../assets/imgs/stadiums/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";
import aboutImg1 from "../../assets/imgs/supporters/matthieu-joannon-JUS82ClcfLw-unsplash.jpg";
import aboutImg2 from "../../assets/imgs/Best-soccer-celebrations.jpeg";
import aboutImg3 from "../../assets/imgs/david-pisnoy-At5I1OSl_2M-unsplash.jpg";

import { MdStadium } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { TbPlayFootball } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";

import stadiumsData from "../../data/stadiumsList";
import managersData from "../../data/managersList";
import playersData from "../../data/playersList";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CustomGrid from "../../components/CustomGrid/CustomGrid";

export default function PageHome() {
  const layout = useLayout();

  const elsRef = useRef();
  const fieldRef = useRef();
  const gridTitleRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fieldTl = gsap
      .timeline({ scrollTrigger: { trigger: fieldRef.current, start: "top 60%" } })
      .to(fieldRef.current.firstChild, { opacity: 1, y: 0 })
      .to(elsRef.current.children, { stagger: 0.15, scale: 1, ease: "back" });

    return () => {
      fieldTl.kill();
    };
  }, []);

  return (
    <main className={css.root} data-nav-color="BLACK">
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

      <section className={css.statistics} data-nav-label="artitles" data-nav-color="RED">
        <h1 className={css.title}>Some Football Legends:</h1>

        <CustomGrid className={css.grid} btnLink="/players" animate data={playersData} />

        <h1 className={css.title}>Some Articles You May Want To Read:</h1>

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
      </section>

      <section
        className={css.footballHistory}
        data-nav-label="I dont know yet"
        data-nav-color="WHITE"
      >
        <div className={css.carousels}>
          <CustomCarousel
            className={css.carousel}
            data={stadiumsData}
            animate
            title="See the full Stadium list"
            btnLabel="Read More"
            btnHref="/statistics"
          />
          <CustomCarousel
            className={css.carousel}
            data={managersData}
            animate
            title="See the full Stadium list"
            btnLabel="Read More"
            btnHref="/statistics"
          />
          <CustomCarousel
            className={css.carousel}
            data={playersData}
            animate
            title="See the full Stadium list"
            btnLabel="Read More"
            btnHref="/statistics"
          />
        </div>

        <CustomGrid className={css.grid} btnLink="/players" animate data={managersData} />
      </section>

      <section className={css.squadBuilder} data-nav-label="Squad Builder" data-nav-color="BLUE">
        <div className={css.field} ref={fieldRef}>
          <img className={css.img} src="/src/assets/imgs/field.png" />

          <div ref={elsRef} className={css.els}>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="/src/assets/imgs/zidane.png" className={css.player} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

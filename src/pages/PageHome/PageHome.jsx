import gsap from "gsap";
import css from "./PageHome.module.scss";
import { useEffect, useRef } from "react";
import useLayout from "../../hooks/useLayout.jsx";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// COMPONENTS
import Hero from "../../components/Hero/Hero";
import Media from "../../components/Media/Media";
import LinkCard from "../../components/LinkCard/LinkCard";
import TeamCard from "../../components/TeamCard/TeamCard";
import NumberBox from "../../components/NumberBox/NumberBox";
import CustomGrid from "../../components/CustomGrid/CustomGrid";
import TextHeading from "../../components/TextHeading/TextHeading";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
// IMAGES
import tacticImg from "../../assets/imgs/tactic.jpeg";
import heroImg from "../../assets/imgs/stadiums/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";
import WCImg from "../../assets/imgs/world-cup.webp";
import momentImg from "../../assets/imgs/legendary-moment-1.webp";
import aboutImg1 from "../../assets/imgs/materazzi-e-rui-costa.jpeg";
import aboutImg2 from "../../assets/imgs/Best-soccer-celebrations.jpeg";
import aboutImg3 from "../../assets/imgs/david-pisnoy-At5I1OSl_2M-unsplash.jpg";
// ICONS
import { MdStadium } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { TbPlayFootball } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";
// DATA
import stadiumsData from "../../data/stadiumsList";
import managersData from "../../data/managersList";
import playersData from "../../data/playersList";
import WCChampionsData from "../../data/nationalTeamsList";

export default function PageHome() {
  const layout = useLayout();
  const elsRef = useRef();
  const imgRef = useRef();
  const fieldRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fieldTl = gsap
      .timeline({ scrollTrigger: { trigger: fieldRef.current, start: "top 60%" } })
      .to(imgRef.current, { opacity: 1, y: 0 })
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

      <section
        className={css.statistics}
        data-nav-label="Unforgettable Legends"
        data-nav-color="RED"
      >
        <h1 className={css.title}>Some Football Legends:</h1>

        <CustomGrid
          className={css.grid}
          hoverColor="var(--red)"
          btnLink="/players"
          animate
          data={playersData}
        />

        <h1 className={css.title}>Some Articles You May Want To Read:</h1>

        <div className={css.linkCards}>
          <LinkCard
            animate
            imgSrc={WCImg}
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
            imgSrc={momentImg}
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
          {/* <CustomCarousel
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
          /> */}
        </div>

        <CustomGrid
          className={css.grid}
          hoverColor="var(--white)"
          btnLink="/players"
          animate
          data={managersData}
        />
      </section>

      <section className={css.worldCup} data-nav-label="Squad Builder" data-nav-color="BLUE">
        <div className={css.champions}>
          {WCChampionsData.map((i, idx) => {
            return (
              <div key={idx} className={css.el}>
                <TeamCard
                  className={css.teamCard}
                  name={i.name}
                  img={i.img}
                  titles={i.titles}
                  gradient={`var(--${i.name.toLowerCase()}-gradient)`}
                />
              </div>
            );
          })}
        </div>

        <h1>Squad Builder</h1>

        <div className={css.field} ref={fieldRef}>
          <img ref={imgRef} className={css.img} src="/src/assets/imgs/field.png" />

          <div ref={elsRef} className={css.els}>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
            <div className={css.el}>
              <img src="../../assets/imgs/players/zidane-headshot.png" className={css.player} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

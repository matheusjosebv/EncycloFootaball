import css from "./PageStatistics.module.scss";
import heroImg from "../../assets/imgs/stadiums/liam-mckay-QYeEoTv6Gbw-unsplash.jpg";

import Hero from "../../components/Hero/Hero";

export default function PageStatistics() {
  return (
    <div className={css.root} data-nav-color="BLACK">
      <Hero
        bgImg={heroImg}
        title="Welcome to our Statistics"
        paragraph="A little bit of our history and purpose studying Football"
      />

      <section className={css.presentation}></section>
    </div>
  );
}

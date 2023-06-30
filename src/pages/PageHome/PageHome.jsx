import css from "./PageHome.module.scss";
import stadiumImg from "../../assets/imgs/alessio-patron-7uEaIrv2-Wk-unsplash.jpg";

export default function PageHome() {
  return (
    <div className={css.root}>
      <div className={css.hero}>
        <img src={stadiumImg} alt="hero-img" className={css.img} />

        <div className={css.text}>
          <h1 className={css.title}>EncycloFootball</h1>
          <p className={css.content}>Explore football like never before</p>
        </div>

        <div className={css.bottom}>
          <div className={css.gradient}></div>
          <div className={css.scrollDown}></div>
        </div>
      </div>

      <section className={css.about}></section>

      <section className={css.worldCupHistory}></section>

      <section className={css.squadBuilder}></section>

      <section className={css.statistics}></section>
    </div>
  );
}

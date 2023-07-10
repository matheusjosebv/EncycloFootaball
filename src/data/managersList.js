import guardiolaImg from "/src/assets/imgs/managers/guardiola.jpeg";
import mourinhoImg from "/src/assets/imgs/managers/mourinho.webp";
import kloppImg from "/src/assets/imgs/managers/klopp.jpeg";
import fergusonImg from "/src/assets/imgs/managers/ferguson.jpeg";
import titeImg from "/src/assets/imgs/managers/tite.webp";
import carloImg from "/src/assets/imgs/managers/ancelotti.jpeg";
import erikImg from "/src/assets/imgs/managers/ten-hag.jpeg";

const managersList = [
  {
    name: "Pep Guardiola",
    img: guardiolaImg,
    nationality: "Spain",
    titles: 30,
    currentTeam: "Manchester City",
  },
  {
    name: "José Mourinho",
    img: mourinhoImg,
    nationality: "Portugal",
    titles: 30,
    currentTeam: "AS Roma",
  },
  {
    name: "Jurgen Klopp",
    img: kloppImg,
    nationality: "Germany",
    titles: 30,
    currentTeam: "Liverpool",
  },
  {
    name: "Alex Ferguson",
    img: fergusonImg,
    nationality: "Scotland",
    titles: 30,
    currentTeam: "Retired",
  },
  {
    name: "Erik Ten Hag",
    img: erikImg,
    nationality: "Netherland",
    titles: 30,
    currentTeam: "Manchester United",
  },
  {
    name: "Carlo Ancelotti",
    img: carloImg,
    nationality: "Italy",
    titles: 30,
    currentTeam: "Real Madrid",
  },
  {
    name: "Tite",
    img: titeImg,
    nationality: "Brazil",
    titles: 30,
    currentTeam: "unemployed",
  },
];

export default managersList;

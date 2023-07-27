import campImg from "/src/assets/imgs/stadiums/camp-nou.jpg";
import santiagoImg from "/src/assets/imgs/stadiums/santiago-bernabeu.jpg";
import neoImg from "/src/assets/imgs/stadiums/neo-quimica-arena.jpeg";
import oldImg from "/src/assets/imgs/stadiums/old-trafford-2.jpg";
import maracanaImg from "/src/assets/imgs/stadiums/maracana.jpeg";
import allianzImg from "/src/assets/imgs/stadiums/allianz-arena.jpeg";

const stadiumsList = [
  {
    name: "Camp Nou",
    img: campImg,
    location: "Barcelona, Spain",
    capacity: 99354,
    team: "Barcelona",
  },
  {
    name: "Santiago Bernabeu",
    img: santiagoImg,
    location: "Madrid, Spain",
    capacity: 81044,
    team: "Real Madrid",
  },
  {
    name: "Neo Quimica Arena",
    img: neoImg,
    location: "São Paulo, Brazil",
    capacity: 49205,
    team: "Corinthians",
  },
  {
    name: "Old Trafford",
    img: oldImg,
    location: "Manchester, England",
    capacity: 74310,
    team: "Manchester United",
  },
  {
    name: "Maracana",
    img: maracanaImg,
    location: "Rio de Janeiro, Brazil",
    capacity: 78838,
    team: "Flamengo/Fluminense",
  },
  {
    name: "Allianz Arena",
    img: allianzImg,
    location: "Munich, German",
    capacity: 75024,
    team: "Bayern Munchen",
  },
];
export default stadiumsList;

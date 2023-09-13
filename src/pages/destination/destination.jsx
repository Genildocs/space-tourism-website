import styled from "@emotion/styled";
import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import { Link } from "react-router-dom";
import Moon from "./lunes/moon.jsx";
import Europa from "./lunes/europa.jsx";
import Mars from "./lunes/mars.jsx";
import Titan from "./lunes/titan.jsx";

export default function Destination() {
  return (
    <ContainerDestination className="bg-[url('../public/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('../public/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../public/assets/destination/background-destination-desktop.jpg')]">
      <Header />
      <PagesTitle number={"01"} title={"Pick your destination"} />
      <div className="lunes">
       <ul>
        <Link to={'/destination/moon'}><li>Moon</li></Link>
       </ul>
      </div>
    </ContainerDestination>
  );
}

const ContainerDestination = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

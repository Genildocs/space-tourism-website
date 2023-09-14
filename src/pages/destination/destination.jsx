import styled from "@emotion/styled";
import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import data from "../../../data.json";
import { Link } from "react-router-dom";
import Moon from "./lunes/moon.jsx";
import Europa from "./lunes/europa.jsx";
import Mars from "./lunes/mars.jsx";
import Titan from "./lunes/titan.jsx";
import React from "react";

export default function Destination() {
  return (
    <ContainerDestination className="bg-[url('../public/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('../public/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../public/assets/destination/background-destination-desktop.jpg')]">
      <Header />
      <PagesTitle number={"01"} title={"Pick your destination"} />
      <div className="text-white">
         <Link to="/destination/moon"><button>Moon</button></Link> 
          <button>Mars</button>
          <button>Europa</button>
          <button>Titan</button>
      </div>
    </ContainerDestination>
  );
}

const ContainerDestination = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

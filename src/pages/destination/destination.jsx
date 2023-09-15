import styled from "@emotion/styled";
import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import LinkLunes from "../../components/linkLunes.jsx";
import Moon from "./lunes/moon.jsx";
import Europa from "./lunes/europa.jsx";
import Mars from "./lunes/mars.jsx";
import Titan from "./lunes/titan.jsx";
import React, { useState } from "react";

export default function Destination() {
  const [selectedMoon, setSelectedMoon] = useState("Moon");
  return (
    <ContainerDestination className="bg-[url('../public/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('../public/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../public/assets/destination/background-destination-desktop.jpg')]">
      <Header />
      <PagesTitle number={"01"} title={"Pick your destination"} />
      <LinkLunes
        selectedMoon={selectedMoon}
        setSelectedMoon={setSelectedMoon}
      />
      {selectedMoon === "Moon" && <Moon />}
      {selectedMoon === "Mars" && <Mars />}
      {selectedMoon === "Europa" && <Europa />}
      {selectedMoon === "Titan" && <Titan />}
    </ContainerDestination>
  );
}

const ContainerDestination = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

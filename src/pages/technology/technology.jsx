import { useState } from "react";
import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import Buttons from "./tech/buttons.jsx";
import Description from "./tech/description.jsx";
import Images from "./tech/images.jsx";
export default function Technology() {
  const [selecTech, setSelecTech] = useState("Launchvehicle")
  return (
    <div className="bg-[url('../public/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('../public/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../public/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
      <Header />
      <PagesTitle number={"03"} title={"SPACE LAUNCH 101"} />
      <Images selecTech={selecTech}/>
      <Buttons selecTech={selecTech} setSelecTech={setSelecTech} />
      <div>
        <h1 className=" font-Barlow text-center font-normal text-secundary mt-[2rem]">THE TERMINOLOGY…</h1>
      </div>
      <Description selecTech={selecTech} />
    </div>
  );
}

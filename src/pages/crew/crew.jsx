import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import Specialist from "./specialists/Specialist.jsx";
import LinkSpecialist from "./specialists/linkSpecialist.jsx";
import { useState } from "react";
export default function Crew() {
  const [selecSpecialist, setSelectSpecialist] = useState("Commander");
  return (
    <div className="bg-[url('/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
      <Header />
      <PagesTitle number={"02"} title={"Meet your crew"} />
      <div className="sm:flex sm:flex-col-reverse">
      <LinkSpecialist
        selecSpecialist={selecSpecialist}
        setSelectSpecialist={setSelectSpecialist}
      />
      <Specialist selecSpecialist={selecSpecialist} setSelectSpecialist={setSelectSpecialist} />
      </div>
    </div>
  );
}

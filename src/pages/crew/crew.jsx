import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import LinkSpecialist from "./specialists/linkSpecialist.jsx";
export default function Crew() {
  return (
    <div className="bg-[url('../public/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('../public/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('../public/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
      <Header />
      <PagesTitle number={"02"} title={"Meet your crew"} />
      <LinkSpecialist />
    </div>
  );
}

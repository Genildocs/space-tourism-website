import Header from "../../components/header.jsx";
import PagesTitle from "../../components/pagesTitle.jsx";
import Buttons from "./tech/buttons.jsx";
import Description from "./tech/description.jsx";
import Images from "./tech/images.jsx";
export default function Technology() {
  return (
    <div className="bg-[url('../public/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('../public/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../public/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
      <Header />
      <PagesTitle number={"03"} title={"SPACE LAUNCH 101"} />
      <Images />
      <Buttons />
      <Description />
    </div>
  );
}

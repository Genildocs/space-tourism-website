import Header from "../components/header.jsx";
import styled from "@emotion/styled";
export default function Home() {
    return (
        <ContainerHome className="bg-[url('../public/assets/home/background-home-mobile.jpg')] sm:bg-[url('../public/assets/home/background-home-tablet.jpg')] lg:bg-[url('../public/assets/home/background-home-desktop.jpg')]">
            <Header />
            <div className="text-terciary  p-5 flex flex-col items-center  ">
                <p className="font-normal font-Barlow text-secundary tracking-[2.7px]">
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1 className="text-[5rem] leading-[6.25rem] py-4 font-normal font-Bellefair">
                    SPACE
                </h1>
                <p className="text-[0.9rem] font-normal font-Barlow text-secundary text-center leading-6">
                    Let’s face it; if you want to go to space, you might as well genuinely
                    go to outer space and not hover kind of on the edge of it. Well sit
                    back, and relax because we’ll give you a truly out of this world
                    experience!
                </p>
                <DivBtn className="bg-terciary flex justify-center  items-center">
                    <button className="text-[1.25rem] text-primary font-Bellefair uppercase cursor-pointer">
                        Explore
                    </button>
                </DivBtn>
            </div>
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DivBtn = styled.div`
  margin-top: 5rem;
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;

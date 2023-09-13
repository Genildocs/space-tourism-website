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
        <DivBtn className="flex justify-center  items-center">
          <BtnHome className="bg-terciary text-[1.25rem] text-primary font-Bellefair uppercase cursor-pointer">
            Explore
          </BtnHome>
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

const DivBtn = styled.div``;

const BtnHome = styled.button`
  margin-top: 6rem;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  transition: all 0.3s;
  position: relative;

  &::after {
    content: "";
    background-color: #ffffff;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover::after {
    transform: scale(1.8);
    opacity: 0.1036;
  }

  &:active::after {
    transform: scale(1);
    opacity: 1;
  }

  &:hover {
    transform: translateY(0);
  }

  &:active {
    transform: translateY(0);
  }
`;

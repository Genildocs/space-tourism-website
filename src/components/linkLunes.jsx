import styled from "@emotion/styled";
import Moon from "../../public/assets/destination/image-moon.png";
import Mars from "../../public/assets/destination/image-mars.png";
import Europa from "../../public/assets/destination/image-europa.png";
import Titan from "../../public/assets/destination/image-titan.png";
import { motion } from "framer-motion";

const LinkLunes = ({selectedMoon, setSelectedMoon}) => {
    

    return (
        <div>
            <div className="flex justify-center">
                <Image
                    className={selectedMoon === "Moon" ? "block" : "hidden"}
                    src={Moon}
                    alt="Moon"
                />
                <Image
                    className={selectedMoon === "Mars" ? "block" : "hidden"}
                    src={Mars}
                    alt="Moon"
                />
                <Image
                    className={selectedMoon === "Europa" ? "block" : "hidden"}
                    src={Europa}
                    alt="Moon"
                />
                <Image
                    className={selectedMoon === "Titan" ? "block" : "hidden"}
                    src={Titan}
                    alt="Moon"
                />
            </div>
            <ul className="flex justify-center gap-5 text-white mt-10">
                <LinkOne>
                    <button onClick={()=>setSelectedMoon("Moon")} className="uppercase tracking-[2.7px]">Moon</button>
                </LinkOne>
                <Links>
                    <button onClick={()=>setSelectedMoon("Mars")} className="uppercase tracking-[2.7px]">Mars</button>
                </Links>
                <Links>
                    <button onClick={()=>setSelectedMoon("Europa")} className="uppercase tracking-[2.7px]">Europa</button>
                </Links>
                <Links>
                    <button onClick={()=>setSelectedMoon("Titan")} className="uppercase tracking-[2.7px]">Titan</button>
                </Links>
            </ul>
        </div>
    );
};

export default LinkLunes;

const LinkOne = styled.li`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    bottom: -5px;
  }
`;

const Links = styled.li`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  position: relative;

  &::before {
    content: "";
    width: 0%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    transition: all 0.5s;
    bottom: -5px;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Image = styled.img`
    height: 16rem;
    margin: 16rem;
    margin: 0 auto;   
`;

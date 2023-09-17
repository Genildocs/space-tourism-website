import { motion } from "framer-motion";
import Commander from "../../../../public/assets/crew/image-douglas-hurley.png";
import MissionSpecialist from "../../../../public/assets/crew/image-mark-shuttleworth.png";
import Pilot from "../../../../public/assets/crew/image-victor-glover.png";
import FlightEnginer from "../../../../public/assets/crew/image-anousheh-ansari.png";

const LinkSpecialist = ({ selecSpecialist, setSelectSpecialist }) => {
    
    const classSelect = (specialist) => {
        if (selecSpecialist === specialist) {
            return "h-[20px] w-[20px] bg-white rounded-full mr-4 !opacity-100";
        } else {
            return "h-[20px] w-[20px] bg-white rounded-full mr-4  opacity-20 ";
        }
    };

    return (
        <div>
            <div
                className="flex justify-center ml-[2rem] mr-[2rem]"
                style={{
                    borderBottom: "0.3px solid #adb6da",
                }}
            >
                <motion.img
                    src={Commander}
                    alt="Commander douglas-hurley"
                    className={`${selecSpecialist === "Commander" ? "block" : "hidden"
                        }   w-[11rem] h-[13.7rem]`}
                />
                <motion.img
                    src={MissionSpecialist}
                    alt="Mission Specialist mark-shuttleworth"
                    className={`${selecSpecialist === "MissionSpecialist" ? "block" : "hidden"
                        }   w-[9.5rem] h-[13.7rem]`}
                />

                <motion.img
                    src={Pilot}
                    alt="Pilot victor-glover"
                    className={`${selecSpecialist === "Pilot" ? "block" : "hidden"
                        }   w-[11rem] h-[13.7rem]`}
                />

                <motion.img
                    src={FlightEnginer}
                    alt="Flight Enginer anousheh-ansari"
                    className={`${selecSpecialist === "FlightEngineer" ? "block" : "hidden"
                        }   w-[11rem] h-[13.7rem]`}
                />
            </div>

            <div className="mt-10 flex justify-center">
                <motion.button
                    className={`${classSelect("Commander")}`}
                    whileHover={{opacity: 1}}
                    onClick={() => setSelectSpecialist("Commander")}
                ></motion.button>

                <motion.button
                    className={`${classSelect("MissionSpecialist")}`}
                    whileHover={{opacity: 1}}
                    onClick={() => setSelectSpecialist("MissionSpecialist")}
                ></motion.button>

                <motion.button
                    className={`${classSelect("Pilot")}`}
                    whileHover={{opacity: 1}}
                    onClick={() => setSelectSpecialist("Pilot")}
                ></motion.button>

                <motion.button
                    className={`${classSelect("FlightEngineer")}`}
                    whileHover={{opacity: 1}}
                    onClick={() => setSelectSpecialist("FlightEngineer")}
                ></motion.button>
            </div>
        </div>
    );
};

export default LinkSpecialist;

import { motion } from "framer-motion";
import Commander from "/assets/crew/image-douglas-hurley.png";
import MissionSpecialist from "/assets/crew/image-mark-shuttleworth.png";
import Pilot from "/assets/crew/image-victor-glover.png";
import FlightEnginer from "/assets/crew/image-anousheh-ansari.png";

const LinkSpecialist = ({ selecSpecialist, setSelectSpecialist }) => {
    
    const classSelect = (specialist) => {
        if (selecSpecialist === specialist) {
            return "h-[20px] w-[20px] bg-white rounded-full mr-4 !opacity-100";
        } else {
            return "h-[20px] w-[20px] bg-white rounded-full mr-4  opacity-20 ";
        }
    };

    return (
        <div className="sm:flex sm:flex-col-reverse">
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
                        }   w-[11rem] sm:w-[28rem] h-[13.7rem] sm:h-[35rem]`}
                />
                <motion.img
                    src={MissionSpecialist}
                    alt="Mission Specialist mark-shuttleworth"
                    className={`${selecSpecialist === "MissionSpecialist" ? "block" : "hidden"
                        }   w-[9.5rem] sm:w-[23rem] h-[13.7rem] sm:h-[33rem]`}
                />

                <motion.img
                    src={Pilot}
                    alt="Pilot victor-glover"
                    className={`${selecSpecialist === "Pilot" ? "block" : "hidden"
                        }   w-[11rem] sm:w-[28rem] h-[13.7rem] sm:h-[33.5rem]`}
                />

                <motion.img
                    src={FlightEnginer}
                    alt="Flight Enginer anousheh-ansari"
                    className={`${selecSpecialist === "FlightEngineer" ? "block" : "hidden"
                        }   w-[11rem] sm:w-[28rem] h-[13.7rem] sm:h-[35rem]`}
                />
            </div>

            <div className="mt-10 sm:mt-0  flex justify-center">
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

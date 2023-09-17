import { delay, motion } from "framer-motion";
const Buttons = ({selecTech, setSelecTech}) => {
    
    const btnSelect = (tech)=>{
        if(selecTech === tech){
            return "!bg-white !text-primary mr-[1rem] h-[40px] w-[40px] rounded-full tracking-[1px] border-2 border-solid border-white"
        }else{
            return "text-terciary mr-[1rem] h-[40px] w-[40px] rounded-full tracking-[1px] border-2 border-solid border-white"
        }
    }
    console.log(btnSelect())
    return (
        <div className="text-white flex justify-center">
            <div>
                <motion.button
                    className={`${btnSelect("Launchvehicle")}`}
                    initial={{background: "transparent"}}
                    whileHover={{
                        background: "white",
                        color: "rgb(11, 13, 23)",
                        transition: { delay: 0.2 },                        
                    }}
                    onClick={()=>setSelecTech("Launchvehicle")}
                >
                    1
                </motion.button>
            </div>
            <div>
                <motion.button
                    className={`${btnSelect("Spaceport")}`}
                    initial={{background: "transparent"}}
                    whileHover={{
                        background: "white",
                        color: "rgb(11, 13, 23)",
                        transition: { delay: 0.2 },
                    }}
                    onClick={()=>setSelecTech("Spaceport")}
                >
                    2
                </motion.button>
            </div>
            <div>
                <motion.button
                    className={`${btnSelect("Spacecapsule")}`}
                    initial={{background: "transparent"}}
                    whileHover={{
                        background: "white",
                        color: "rgb(11, 13, 23)",
                        transition: { delay: 0.2 },
                    }}
                    onClick={()=>setSelecTech("Spacecapsule")}
                >
                    3
                </motion.button>
            </div>
        </div>
    );
};

export default Buttons;

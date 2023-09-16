import { motion } from "framer-motion";
import Commander from "../../../../public/assets/crew/image-douglas-hurley.png";
const LinkSpecialist = () => {
    
    
    return (
        <div>
            <motion.div
                className="flex justify-center ml-[2rem] mr-[2rem]"
                style={{
                    borderBottom: "0.5px solid #D0D6F9",
                }}
               
            >
                <motion.img
                    src={Commander}
                    alt="commander Douglas Hurley"
                    className="w-[11rem] h-[13.7rem]"
                    
                />

                
            </motion.div>
        </div>
    );
};

export default LinkSpecialist;

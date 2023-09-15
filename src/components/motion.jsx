import { motion } from "framer-motion";
const Motion =() =>{

    return(
        <>
            <motion.div style={{
                background: 'red',
                height: 150,
                width: 150,
                borderRadius: 100,
            }}            
            animate={{
                translateY: [0, 100, 0],
                translateX: [0, 100, 0]
            }}
            transition={{duration: 10}}        
            >
                
            </motion.div>

        </>
    )

} 

export default Motion;
import { motion , useMotionValue, useTransform, animate} from "framer-motion";
import { useEffect } from "react";

const Motion =() =>{
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))
    
    useEffect(() => {
      const controls = animate(count, 100, {duration: 10})
    
      return controls.stop
    }, [])
    
    return <motion.div className=" text-[2rem]">{rounded}</motion.div>
    
} 

export default Motion;
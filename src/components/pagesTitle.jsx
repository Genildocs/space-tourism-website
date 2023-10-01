import styled from "@emotion/styled";
import { motion } from "framer-motion";


const PagesTitle = ({number, title}) =>{

    return(
        <motion.div className="text-lg">
            <Title><span className="text-secundary font-bold">{number}</span>{title}</Title>
        </motion.div>
    )
}

export default PagesTitle;

const Title = styled.h1`
    color: #FFF;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 2rem 0;
  
  @media(min-width: 640px){
    justify-content: start;
    margin-left: 2rem;
  }

`
import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import Geko from './geko.png'


const Image = styled(motion.img)`
position: absolute;
width: 100%;

max-width: 500px;
max-width: 500px;
`;


const ColumnRight = styled.div``;


const Test = () => {
  return ( 

   <ColumnRight> 
    <Image src={Geko} alt='geko' 
    drag = {true}
    dragConstraints={{left: 0, right: 250, top:0, bottom: 50}}
    initial={{opacity:0, y:-100}}
    animate={{opacity:1, y:0, transition:{duration:1}}}
    whileTap ={{ scale: 0.9}}/>
    </ColumnRight>
  );
};

export default Test;

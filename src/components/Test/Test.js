import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Geko from './geko.png';


const Image = styled(motion.img)`
position: absolute;
width: 100%;
max-width: 500px;
max-width: 500px;
`;


const ColumnRight = styled.div``;


const Test = () => {
  return ( 
    <>
   <ColumnRight> 
    <Image src={Geko} alt='geko' 
    drag = {true}
    // dragConstraints={{left: 250, right: 250, top:250, bottom: 250}}
    initial={{opacity:0, y:-100}}
    animate={{opacity:1, y:0, transition:{duration:1}}}
        // dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
    whileTap ={{ scale: 0.9}}/>
    </ColumnRight>

      <motion.div 
      drag={true}
      >
    <h1 
    
    > Drag me around </h1>
    </motion.div>
    </>
  );
};

export default Test;

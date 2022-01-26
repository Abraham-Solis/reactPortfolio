import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue} from "framer-motion"
import Geko from './geko.png'
import './Work.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";


const Image = styled(motion.img)`
display:block;
margin-left: auto;
margin-right:auto;
width: 1000px;
height: 1000px;
`;

const Work = () => {
 
  
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <body className='bg'>

      <h6 className='header'>Projects:</h6>

      <div className='row'>
        <div className='col-1'></div>
        <Card
          data-aos="fade-up"
          className='col-6'>
          <CardBody>
            <CardTitle className= "title"tag="h5">
              SuNodeKu
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              January 2022
            </CardSubtitle>
          </CardBody>
          <img
            alt="SunodeKu"
            src="https://user-images.githubusercontent.com/92957388/151100131-f6e51e81-4aa4-463f-8d03-b597edec185e.PNG"
            width="100%"
          />
          <CardBody>
            <CardText className='summary' >
              SuNodeKu is an interactive puzzle challenge. Presented with a polished and responsive UI. The user is able to creat an account and able to select a difficulty to generate a sudoku grid in which number of completed games, and total amount of games are recorded in on the user's personal profile and on the server leaderboard. Users can post their boards to the Forum and ask for help from other users.
            </CardText>
            <Button href="https://github.com/Abraham-Solis/suNodeKu" rel="noopener noreferrer" target="_blank" variant="secondary">GitHub</Button>{' '}
            <Button href="https://sunodeku.herokuapp.com/" rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
          </CardBody>
        </Card>
        <div className='col-4'>
          <Image src={Geko} alt='geko'
            drag={true}
            dragConstraints={{ left: 100, right: 150, top: 150, bottom: 150 }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            whileTap={{ scale: 0.9 }} />
        </div>
      </div>

      <br />
      <br />
      <br />

{/* Card 2*/}

      <div className='row'>
        <div className='col-4 gekko'>
        </div>
        <Card
          data-aos="fade-left"
          className='col-6'>
          <CardBody>
            <CardTitle className= "title" tag="h5">
              PairUp
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              December 2021
            </CardSubtitle>
          </CardBody>
          <img
            alt="PairUp"
            src="https://user-images.githubusercontent.com/92957388/151098792-4dc3f464-a07d-452a-ad0f-550e99def285.PNG"
            width="100%"
          />
          <CardBody>
            <CardText className='summary'>
              We've created a tool to make meal planning quick and easy! Simply select which ingredients you've got, and you'll get tailor-made recipes and a corresponding YouTube video to show you how to follow along. Better yet, our app will even provide precise nutritional information and recommend the perfect beer pairings of your finished dish!
            </CardText>
            <Button href = "https://github.com/me0wmerz/pairUp"rel="noopener noreferrer" target="_blank" variant="secondary">GitHub</Button>{' '}
            <Button href= "https://me0wmerz.github.io/pairUp/"rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
          </CardBody>
        </Card>
        <div className='col-1'></div>
      </div>
      
      <br />
      <br />
      <br />

      {/* Card 3 */}
      <div className='row'>
        <div className='col-1'></div>
        <Card
          data-aos="fade-right"
          className='col-6'>
          <CardBody>
            <CardTitle className= "title"tag="h5">
              Everything About Tea
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              November 2021
            </CardSubtitle>
          </CardBody>
          <img
            alt="Tea"
            src="https://data.whicdn.com/images/328678500/original.gif"
            width="100%"
          />
          <CardBody>
            <CardText className='summary'>
              A website describing why tea is essential. It was made with soul purpose of being a mobile responsive website.
            </CardText>
            <Button href="https://github.com/Abraham-Solis/newTea" rel="noopener noreferrer" target="_blank"  variant="secondary">GitHub</Button>{' '}
            <Button href="https://abraham-solis.github.io/newTea/" rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
          </CardBody>
        </Card>
        <div className='col-4'></div>
      </div>



    </body >
  );
};

export default Work;

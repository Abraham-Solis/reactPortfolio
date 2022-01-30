import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import Geko from './geko.png'
import './Work.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";


const Image = styled(motion.img)`
display:block;
margin-left: auto;
margin-right:auto;
width: 300px;
height: 300px;
z-index: 2;
`;

const MotionConstraints = styled(motion.div)`
  height: 1vh;
  width: 1vw;
`;

const Work = () => {
  const constraintsRef = useRef(null);


  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <body className='bg'>


      <Row className='bg'>
        <h6 id="projects" className='header'>Projects:</h6>
        <Col xs="0" md="1"></Col>
        <Col xs="12" md="6">
          <Card
            data-aos="fade-up"
            md="6"
            className='shadow'>
            <CardBody>
              <CardTitle className="title" tag="h5">
                SuNodeKu
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >January 2022
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
        </Col>
        <Col xs="0" md="2" className='removeSpace'>

          <MotionConstraints ref={constraintsRef}>
            <Image src={Geko} alt='geko' id='animal'
              drag={true}
              dragConstraints={constraintsRef}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              dragTransition={{ bounceStiffness: 45, bounceDamping: 5 }}
              whileTap={{ scale: 0.9 }}
            />
          </MotionConstraints>

        </Col>
      </Row>

      <br />
      <br />
      <br />

      {/* Card 2*/}

      <Row>
        <Col xs="0" md="4"></Col>
        <Col xs="0" md="6">
          <Card
            data-aos="fade-left"
            className='shadow'>
            <CardBody>
              <CardTitle className="title" tag="h5">
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
              <Button href="https://github.com/me0wmerz/pairUp" rel="noopener noreferrer" target="_blank" variant="secondary">GitHub</Button>{' '}
              <Button href="https://me0wmerz.github.io/pairUp/" rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
            </CardBody>
          </Card>
        </Col>
        <Col xs="0" md="2" className='removeSpace'></Col>
      </Row>

      <br />
      <br />
      <br />

      {/* Card 3 */}
      <Row >
        <Col xs="0" md="2"></Col>
        <Col xs="12" md="6">
          <Card
            data-aos="fade-right"
            className='shadow'>
            <CardBody>
              <CardTitle className="title" tag="h5">
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
              <Button href="https://github.com/Abraham-Solis/newTea" rel="noopener noreferrer" target="_blank" variant="secondary">GitHub</Button>{' '}
              <Button href="https://abraham-solis.github.io/newTea/" rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
            </CardBody>
          </Card>
        </Col>
        <Col xs="0" md="4" className='removeSpace' ></Col>
      </Row>



    </body >
  );
};

export default Work;

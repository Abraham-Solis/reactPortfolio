import React from 'react';
import './About.css'
import { Row, Col } from "reactstrap";


const About = () => {
  return (



    <>
      
        <Row className='bg'>
          <h6 id="aboutMe" className='header'>About Me:</h6>

          <Col xs="12" md="6">
            <div className="user one" ></div>

          <br></br>
          </Col>
          <Col xs="12" md="6" className='paragraph'> <p> I am a Full Stack Web Developer graduated from UCI continue learning program. I enjoy coding, creating fun websites and gaming. I like listening to Lo-fi music. If you liked the work presented above feel free to contact me below and we can get started!</p>
            <a href="https://github.com/Abraham-Solis" rel="noopener noreferrer" target="_blank"><img className='full' src="https://img.icons8.com/nolan/96/github.png" alt="gitHub" /></a>
            <a href="https://www.linkedin.com/in/abraham-solis-b08bb3194/" rel="noopener noreferrer" target="_blank"><img className='full' src="https://img.icons8.com/nolan/96/linkedin.png" alt='link' /></a>

          </Col>
        </Row>
      
    </>

  );
};

export default About;

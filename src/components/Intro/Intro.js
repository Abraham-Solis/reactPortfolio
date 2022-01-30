import React from 'react';
import { useEffect } from 'react';
import "./Intro.css";
import { gsap } from "gsap";
import { Container, Row, Col } from 'reactstrap';

const Intro = () => {

  // Using gsap for animation
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  //first needs class and then movement of object "%" and duration of animation
  useEffect(() => {


  tl.to('.text', { y: '0%', duration: 1.5, stagger: 0.25 });
  tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
  //   // Here start one second faster
  tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  //   //Specify a starting and ending point in this case the opacity
    tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 })
    tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1')
  })


  return (
    <>
      <Container className='edge landing'>
        <Row >

          <Col md="12" >
            <nav>
              <h1 id="logo">Abraham Solis</h1>
              <ul className="nav-links">
                <li><a href="#aboutMe" id="GG">About Me</a></li>
                <li><a href="#projects" id="GG">Projects</a></li>
                <li><a href="#contactMe" id="GG">Contact Me</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1xywiaFfxd92L9CzRJ_a7w8rvDYUuOtCrv9VI_lEKNes/edit" id="GG">Resume</a></li>
              </ul>
            </nav>
          </Col>
          <h2 className='big-text'>Welcome to my Portfolio</h2>

        </Row>
      </Container>


      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className='text'>Creating Ideas &nbsp; </span>
          </h1>
        </div>
        <div className="intro-text">
          <h1 className="hide">
            <span className='text'> Made for &nbsp;</span>
          </h1>
        </div>
        <div className="intro-text">
          <h1 className="hide">
            <span className='text'> Everyday people.</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>

    </>
  );
};

export default Intro;

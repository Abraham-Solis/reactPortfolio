import React from 'react';
import { useEffect } from 'react';
import "./Intro.css";
import { gsap } from "gsap";

const Intro = () => {

  // Using gsap for animation
  const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

  //first needs class and then movement of object "%" and duration of animation
  useEffect(() =>{

    
    tl.to('.text', {y:'0%', duration: 1.5, stagger: 0.25});
    tl.to('.slider', {y:'-100%', duration: 1.5, delay: 0.5});
    // Here start one second faster
    tl.to('.intro', {y:'-100%', duration: 1}, '-=1');
    //Specify a starting and ending point in this case the opacity
    tl.fromTo('nav', {opacity:0}, {opacity:1, duration:1})
    tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1}, '-=1')
  })


  return (
    <>
      <main>
        <section className="landing">
          <nav>
            <h1 id="logo">Abraham Solis</h1>
            <ul className="nav-links">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
          <h2 className='big-text'>Welcome to my Portfolio</h2>
        </section>
      </main>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className='text'>Creating Innovations &nbsp; </span>
          </h1>
        </div>
        <div className="intro-text">
          <h1 className="hide">
            <span className='text'> Made for &nbsp;</span>
          </h1>
        </div>
        <div className="intro-text">
          <h1 className="hide">
            <span className='text'> Extravagant people.</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </>
  );
};

export default Intro;

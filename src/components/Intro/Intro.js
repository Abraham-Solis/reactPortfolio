import React from 'react';

const Intro = () => {
  return (
      <>
    <main>
      <section className="landing">
        <h1 id ="logo">Abraham Solis</h1>
        <ul className="nav-links">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <h2 className='big-text'>Weclome to my Portfolio</h2>
      </section>
    </main>
    <div className="intro">
      <div className="intro-text">
        <h1 className="hide">
          <span className = 'text'>Creating Inovation</span>
        </h1>
      </div>
        <h1 className="hide">
          <span className = 'text'>For Everyday</span>
        </h1>
          <h1 className="hide">
          <span className = 'text'>people.</span>
        </h1>
    </div>
    <div className="slider"></div>
  </>
  );
};

export default Intro;

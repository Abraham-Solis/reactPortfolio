import React, { useState, useEffect } from 'react';
import './Parallax.css'


const Parallax = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffSet);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)

  }, []);


return (
  
  <section className="">
    <div
      className="foregroundClouds"
      style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
    />
    <div
      className="midgroundClouds"
      style={{ transform: `translateY(${offsetY * 0.8}px)` }}
    />
    <div
      className="backgroundClouds"
      style={{ transform: `translateY(${offsetY * 0.8}px)` }}
    />
  </section>

  );
};

export default Parallax;

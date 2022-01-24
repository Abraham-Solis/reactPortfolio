import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Boxes.css'

const Example = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='grids'>
      <div className='boxes'>1</div>
      <div className='boxes'>2</div>
      <div data-aos="fade-left"className='boxes'>3</div>
      <div data-aos="fade-right" className='boxes'>4</div>
      <div data-aos="fade-left" className='boxes'>5</div>
      <div data-aos="fade-right"  className='boxes'>6</div>
    </div>
  );
};

export default Example;

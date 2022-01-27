import React from 'react';
import './About.css'

const About = () => {
  return (
    <>
      <section className='bg'>
        <h6 className='header'>About Me:</h6>
           {/* <div class="user one">
          </div>
         
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quaerat perferendis omnis dolorem pariatur deleniti necessitatibus a quasi magni illo. Esse ipsa consectetur eos at nemo nisi nesciunt minus ipsam.</p>
        */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-6'>
            <div class="user one">
            </div>


          </div>
          <div className='col-4 paragraph'>  <p> I am a Full Stack Web Developer graduated from UCI continue learning program. I enjoy coding, creating fun websites and gaming. If you liked the work presented above feel free to contact me below and we can get started!</p></div>
      
        </div>

       
      </section>
    </>

  );
};

export default About;

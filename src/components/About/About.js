import React from 'react';
import './About.css'


const About = () => {
  return (

    
    <>
      <section className='bg'>
        <h6 id ="aboutMe"className='header'>About Me:</h6>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-6'>
            <div class="user one">
            </div>


          </div>
          <div className='col-4 paragraph'>  <p> I am a Full Stack Web Developer graduated from UCI continue learning program. I enjoy coding, creating fun websites and gaming. I like listening to Lo-fi music. If you liked the work presented above feel free to contact me below and we can get started!</p>
          <a href="https://github.com/Abraham-Solis" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/github.png" alt="gitHub"/></a>  
          <a href="https://www.linkedin.com/in/abraham-solis-b08bb3194/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/linkedin.png" alt='link' /></a>
          
          </div>
          
      
        </div>
      </section>
    </>

  );
};

export default About;

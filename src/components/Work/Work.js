import React, { useEffect } from 'react';
import './Work.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap";

const Work = () => {

  useEffect(() => {
    Aos.init({ duration: 3000})
  }, [])

  return (
    <body className='bg'>
      <h2 className='header'>Projects:</h2>
      <div className='row black'>
        <div className='col-1'></div>
        <Card data-aos="fade-in"className='col-6'>
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
          </CardBody>
          <img
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <CardLink href="#">
              Card Link
            </CardLink>
            <CardLink href="#">
              Another Link
            </CardLink>
          </CardBody>
        </Card>
        <div className='col-4'></div>

      </div>
    </body >
  );
};

export default Work;

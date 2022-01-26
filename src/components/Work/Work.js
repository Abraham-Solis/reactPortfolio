import React, { useEffect } from 'react';
import './Work.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap";

const Work = () => {

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <body className='bg'>

      <h6 className='header'>Projects:</h6>

      <div className='row'>
        <div className='col-1'></div>
        <Card
          data-aos="fade-up"
          className='col-6'>
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

      <br />
      <br />
      <br />

      {/* Card 2  */}
      <div className='row'>
        <div className='col-4'></div>
        <Card
          data-aos="fade-left"
          className='col-6'>
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
        <div className='col-1'></div>
      </div>

      <br />
      <br />
      <br />

{/* Card 3 */}

      <div className='row'>
        <div className='col-1'></div>
        <Card
          data-aos="fade-right"
          className='col-6'>
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

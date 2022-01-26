import React, { useEffect } from 'react';
import './Work.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";

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
            src="https://user-images.githubusercontent.com/92957388/148321258-a049bc95-4641-4479-9359-05a450fc1704.PNG"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button href="https://github.com/Abraham-Solis/suNodeKu" rel="noopener noreferrer" target="_blank" variant="secondary">GitHub</Button>{' '}
            <Button href="https://sunodeku.herokuapp.com/" rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
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
            src="https://data.whicdn.com/images/328678500/original.gif"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button href="https://github.com/Abraham-Solis/newTea" rel="noopener noreferrer" target="_blank"  variant="secondary">GitHub</Button>{' '}
            <Button href="https://abraham-solis.github.io/newTea/" rel="noopener noreferrer" target="_blank" variant="secondary">Live Link</Button>{' '}
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
            src="https://user-images.githubusercontent.com/92957388/151098792-4dc3f464-a07d-452a-ad0f-550e99def285.PNG"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button variant="secondary">GitHub</Button>{' '}
            <Button variant="secondary">Live Link</Button>{' '}
          </CardBody>
        </Card>
        <div className='col-4'></div>
      </div>

    </body >
  );
};

export default Work;

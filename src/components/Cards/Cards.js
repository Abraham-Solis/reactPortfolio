import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Card, Button, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, CardImg} from 'reactstrap';

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <CardGroup>
      <Card 
        data-aos="fade-up">
        <CardImg 
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
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
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
      <Card 
        data-aos="fade-down">
        <CardImg 
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
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
          <CardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
      <Card
        data-aos="fade-up">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
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
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Cards;

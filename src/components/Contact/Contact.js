import React from 'react';
import { Form, FormGroup, Label, Input, Button, Row,Col } from "reactstrap";
import './Contact.css'

const Contact = () => {
  return (
    <Row className="bg">
      <h6 id="contactMe" className='header'>Contact Me:</h6>
        <Col xs='2' md='2'></Col>
        <Form  className='col-8'>
          <FormGroup>
            <Label className="prompt" for="exampleName">
              Name
            </Label>
            <Input
              id="exampleName"
              name="name"
              placeholder="First and Last Name"
              type="name"
            />
          </FormGroup>
          <FormGroup>
            <Label className="prompt" for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="example@gmail.com"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label className="prompt" for="exampleText">
              Say Hello!
            </Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
            />
          </FormGroup>
          <br />
          <Button>
            Submit
          </Button>
        </Form>
        <Col xs="2" md="2"></Col>
      <br />
      <br />
      <br />
    </Row>
  );
};

export default Contact;

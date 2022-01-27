import React from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Contact.css'

const Contact = () => {
  return (
    <section className ="bg">
      <h6 id="contactMe" className='header'>Contact Me:</h6>
      <div className='row'>
        <div className='col-4'></div>
    <Form className='col-4'>
      <FormGroup>
        <Label className = "prompt"for="exampleEmail">
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
        <Label className ="prompt"for="exampleText">
          Text Area
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
    <div className='col-4'></div>
    </div>
    </section>
  );
};

export default Contact;

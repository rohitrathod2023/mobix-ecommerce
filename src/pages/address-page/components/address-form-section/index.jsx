import React from "react";
import "./address-form-section.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddressFormSection = () =>{
    return(
        <div>
          <div>
            <p className="address-section-headlinne">or Create New Delivery Address</p>
          </div>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Save Address as</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Mobile Number" />
        </Form.Group>
      </Row>

     <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Maharastra</option>
            <option>Delhi</option>
            <option>Bihar</option>
            <option>Utter Pradesh</option>
          </Form.Select>
        </Form.Group>

      </Row>
        
      <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Pincode</Form.Label>
          <Form.Control placeholder="Pincode" id="pincode"/>
        </Form.Group>

    <Button variant="primary" type="submit" id="deliver-btn">
        Deliver here
      </Button>
    </Form>
        </div>
    );
};

export default AddressFormSection;
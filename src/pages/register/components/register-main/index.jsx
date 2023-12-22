import React from "react";
import "./register-main.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const RegisterMain = () => {

    return <div className="register-main">
          <div className="register-container">
            <h1 className="main-heading my-4">Create Account 😍</h1>


            <FloatingLabel
              controlId="floatingFullname"
              label="Full Name"
              className="my-4"
              >
            <Form.Control type="text" placeholder="Full Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingMobile"
              label="Mobile Number"
              className="my-4"
              >
            <Form.Control type="number" placeholder="0000000000" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="my-4"
              >
            <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingDateOfBirth"
              label="Date of birth (DD/MM/YYYY)"
              className="my-4"
              >
            <Form.Control type="date" placeholder="DD/MM/YYYY" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="my-4"
              >
            <Form.Control type="password" placeholder="******" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingConfirmPassword"
              label="Confirm Password"
              className="my-4"
              >
            <Form.Control type="password" placeholder="******" />
            </FloatingLabel>

          <div className="form-container my-4"> 
          <button className="main-btn p-2">
            Create Account
            </button>
          </div>
          <h3 className="heading-sub">
             Already have an Account?
             <a href="/login" className="text-pink link-medium mx-2">
             Login here
              </a>
          </h3>
          </div>
         </div>

};
 export default RegisterMain;
import React from "react";
import "./navbar-main.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import offers from "../../assets/images/offers.svg"


const NavbarMain = () =>{
    return(
<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <div className="nav-main">
            <div className="left-part">
            <Nav className="me-auto">
            <Nav.Link href="#samsung" className="custom-nav-link">
              Samsung Mobile
              </Nav.Link>
            <Nav.Link href="#iphone" className="custom-nav-link">
              iPhones
              </Nav.Link>
            <Nav.Link href="#mi" className="custom-nav-link">
              Mi Phones
              </Nav.Link>
          
          <Nav.Link href="#oppo" className="custom-nav-link">
             Oppo Phones
              </Nav.Link>
            <Nav.Link href="#oneplus" className="custom-nav-link">
             Oneplus Phones
              </Nav.Link>
            <Nav.Link href="#vivo" className="custom-nav-link">
             Vivo Phones
              </Nav.Link>
            <Nav.Link href="#other" className="custom-nav-link">
             Others
              </Nav.Link>
              
          </Nav>
            </div>
            <div className="right-part">
              <div className="offer-text">
              <img src={offers} 
              alt="Offers icon" />
              <span className="mx-1">Offers</span>  
              </div>
             
             <div>
             <button 
              className="sub-btn py-1 px-2 mx-3">
                New</button>
              </div>

            </div>
          </div>
        
          
         </Container>
      </Navbar>
    );
};

export default NavbarMain;
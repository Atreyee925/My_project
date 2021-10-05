import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import './header.css';
export const Header = () => {
    return (
        <div>
            <header>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6">
                <img src="pic.png"></img>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img src="logg.png" className="pic"></img> <a className="hov">2/148E Park Street</a>
                 <p className="hov"> kolkata 700056 </p>                                      
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img src="phone.webp" className="pic"></img> <a className="hov">1-8000-1234-567</a><br/>
                Mon – Sat: 9:00–18:00
                                        
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-6" >
                      <img src="instagram.png" className="picc"></img>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6" >
                      <img src="facebook.png" className="picc"></img>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6" >
                      <img src="twitt.png" className="picc"></img>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6" >
                      <img src="goog.png" className="picc"></img>
                    </div>
                </div>
                </div>
                </div>
            </header>
            <Navbar fixed="top" />
          <Navbar bg="danger" expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home" className="cen">HOME</Nav.Link>
        <Nav.Link as={Link} to="/about" className="ceni">ABOUT</Nav.Link>
        {/* <Nav.Link href="#link">Link</Nav.Link> */}
        <NavDropdown title="MENU" id="basic-nav-dropdown" className="ceni">
          <NavDropdown.Item as={Link} to="/diffmenu">Sushi</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/diffmenu">Pizza</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/diffmenu">Burger</NavDropdown.Item>
          
          <NavDropdown.Item as={Link} to="/diffmenu">Barbeque</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/diffmenu">Mexican</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/diffmenu">Sandwitch</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="PAGES" id="basic-nav-dropdown" className="ceni">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="GALLERY" id="basic-nav-dropdown" className="ceni">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/contact" className="ceni">CONTACT</Nav.Link>
        <NavDropdown title="NEWS" id="basic-nav-dropdown" className="ceni">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

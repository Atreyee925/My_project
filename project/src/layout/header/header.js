import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Container,NavDropdown,CardGroup,Card} from 'react-bootstrap'
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
                    <div class="col-lg-2 col-md-3 col-sm-6 " >
                    <i class="fab fa-instagram in"></i>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6" >
                    <i class="fab fa-facebook in"></i>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 " >
                    <i class="fab fa-twitter in"></i>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 " >
                    <i class="fab fa-google-plus-g in"></i>
                    </div>
                </div>
                </div>
                </div>
            </header>
            <Navbar fixed="top" />
          <Navbar bg="danger" expand="lg" >
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/" className="cen">HOME</Nav.Link>
        <Nav.Link as={Link} to="/about" className="ceni">ABOUT</Nav.Link>
        {/* <Nav.Link href="#link">Link</Nav.Link> */}
        <NavDropdown title="MENU" id="basic-nav-dropdown" className="ceni">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <img src="sushi.jpg"className="sush"></img>
          <NavDropdown.Item as={Link} to="/diffmenu" className="ceni">Sushi</NavDropdown.Item>
       </div>
          <div class="col-lg-6 col-md-3 col-sm-6">
            <img src="pizza.jpg" className="piz"></img>
            <NavDropdown.Item as={Link} to="/diffmenu" className="ceni">Pizza</NavDropdown.Item>
          </div>
        </div>
        <div class="row">
         <div class="col-lg-5 col-md-6 col-sm-12">
           <img src="burger.jpg" className="bur"></img>
           <NavDropdown.Item as={Link} to="/diffmenu">Burger</NavDropdown.Item>
         </div>
         <div class="col-lg-7 col-md-6 col-sm-12">
           <img src="Barbe.jpg" className="buri"></img>
           <NavDropdown.Item as={Link} to="/diffmenu">Barbeque</NavDropdown.Item>
         </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <img src="mexican.jpg" className="buriii"></img>
            <NavDropdown.Item as={Link} to="/diffmenu">Mexican</NavDropdown.Item>
          </div>
          <div class="col-lg-6 col-md-5 col-sm-12">
            <img src="sandwitch.jpg" className="burii"></img>
            <NavDropdown.Item as={Link} to="/diffmenu">Sandwitch</NavDropdown.Item>
          </div>
        </div>
       </NavDropdown>
        <NavDropdown title="PAGES" id="basic-nav-dropdown" className="ceni">
          <NavDropdown.Item as={Link} to="/testi">Testimonials</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/tab">Tabs</NavDropdown.Item>
          
          <NavDropdown.Item as={Link} to="/fullmenu">Menu</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/gal" className="ceni">GALLERY</Nav.Link>
        <Nav.Link as={Link} to="/contact" className="ceni">CONTACT</Nav.Link>
        <Nav.Link as={Link} to="/login" className="ceni">LOGIN</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

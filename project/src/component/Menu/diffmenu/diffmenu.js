import React from 'react'
import { Card, Container } from 'react-bootstrap'
import MenuData from '../menu.json'
import './diffmenu.css';
export const Diffmenu = () => {
   
    
    return (
        <div>
            {
                MenuData.Menu.map((prod)=>(
                    
                        <Card className="bg-dark text-white">
        <Card.Img src={prod.menu_img} alt="Card image" className="tuni" />
     <Card.ImgOverlay>
    <Card.Title className="midi">{prod.menu_name}</Card.Title>
    <Card.Text className="pari">
      {prod.menu_des}
    </Card.Text>
    <button className="buti">View Menu</button>
  </Card.ImgOverlay>
</Card>
                   
                ))
            }
            <section className="seti">
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="roll.jpg" class="d-block w-100 toni" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
          <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                  <h1 className="sett">Fast Delivery  </h1>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                  <h4 className="fix">Enjoy our free, fast, and reliable delivery service.  </h4>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                  <button class="bot">LEARN MORE</button>
              </div>
          </div>
        </div>
      </div>
     
      
    </div>
    
  </div>
</div>
            </section>
            <footer>
                <Container>
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-2 col-sm-2">
                            <h4>Subscribe</h4>
                        </div>
                        <div class="col-lg-6 col-md-2 col-sm-2">
                            <h6>Get the latest updates and offers</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 col-md-6 col-sm-6">
                            <input type="Email" id="Email" placeholder="Your email" className="inp"></input>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <button className="man">Subscribe</button>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm3">
                        <h3>Follow Us</h3>
                    </div>
                </div>
                </Container>
            </footer>
        </div>
    )
}

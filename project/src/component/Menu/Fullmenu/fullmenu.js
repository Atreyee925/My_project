import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './fullmenu.css';
export const Fullmenu = () => {
    return (
        <div>
    <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 cc" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Menu</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Menu</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="menu.jpg" className="men"></img>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="sandmenu.jpg" className="menn"></img>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="mexi.jpg" className="men"></img>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="burgermenu.jpg" className="menn"></img>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="design.jpg" className="men"></img>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="Barbecuemenu.jpg" className="menn"></img>
                </div>
            </div>
            <section className="setii">
              <h1 className="big"> Foodie</h1>
              <p className="chan">Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals</p>
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
            <footer className="change">
                <Container>
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-2 col-sm-2">
                            <h4>Subscribe</h4>
                        </div>
                        <div class="col-lg-6 col-md-2 col-sm-2">
                            <h6>Get the latest updates and offers</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-6 col-sm-6">
                            <input type="Email" id="Email" placeholder="Your email" className="inp"></input>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <button className="man">Subscribe</button>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm3">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3>Follow Us</h3>
                            </div>
                        </div>
                        <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-instagram inn"></i>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-facebook inn"></i>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-twitter inn"></i>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-google-plus-g inn"></i>
                    </div>
                </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                        <h3>Contact us</h3>
                        </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-6 col-sm-12">
                        <img src="phone.webp" className="pic"></img> <a className="hov">1-90074-127</a><br/>
                        we work everyday
                        </div>
                      </div>
             
                 
                </div>
                </div>
                
                
               </Container>
            </footer>
            
        </div>
         )
}

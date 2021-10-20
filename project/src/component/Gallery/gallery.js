import React from 'react'
import './gallery.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Gallery = () => {
    return (
        <div>
             <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 cc" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Gallery</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Gallery</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>
<section className="magic">
    <h1 className="mag">Recommended Dish Pictures</h1>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="ZoomImage">
        <img src="gallery.jpg" alt="" width="390" height="300" class="img-responsive"></img>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="g.jpg" alt="" width="390" height="300" class="img-responsive"></img>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="fish.jpg" alt="" width="390" height="300" class="img-responsive"></img>
        </div>
        </div>
        </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="ham.jpg" alt="" width="390" height="300" class="img-responsive"></img>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="chole.jpg" alt="" width="390" height="300" class="img-responsive"></img>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="spi.jpg" alt="" width="390" height="300" class="img-responsive"></img>
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="sin.jpg" alt="" width="390" height="300" class="img-responsive hove"></img>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="pizza.jpg" alt="" width="390" height="300" class="img-responsive hove"></img>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="ZoomImage">
        <img src="burger.jpg" alt="" width="390" height="300" class="img-responsive hove"></img>
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
               <footer className="foott">
                 <p >Food Delivery  © 2021 Privacy Policy</p>
               </footer>
            </footer>
            
        </div>
    )
}

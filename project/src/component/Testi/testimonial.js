import React from 'react'
import './testimonial.css';
import { Container,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Testimonial = () => {
    return (
        <div>
             <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 laa" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Testimonials</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Testimonials</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>
<section>
    <Container>
    <div class="row doi">
        <div class="col-lg-4 col-md-6 col-sm-12">
        <Image src="te.jpg" roundedCircle />
        <h4>The Best Food Delivery Service</h4>
        <p>I’d like to acknowledge Food Delivery for their pleasant help today when I called to place a last minute order for a meeting.</p>
        <h6>By Emily Wilson</h6>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <Image src="tes.jpg" roundedCircle />
        <h3>Great Service</h3>
        <p>Your female employee on the phone was so kind yesterday! She took my order, got it exactly correct; and my food arrived.</p>
        <h6>By John Smith</h6>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <Image src="test.jpg" roundedCircle />
        <h3>Quality Delivery</h3>
        <p>I am very grateful to have this service in our city. You make dinner a no-brainer on those crazy/ lazy nights and even on holidays.

          </p>
        <h6>By Jane Lee</h6>
        </div>
    </div>
    <div class="row doil">
        <div class="col-lg-4 col-md-6 col-sm-12">
        <Image src="testi.jpg" roundedCircle />
        <h4>I Like Your Pizzas</h4>
        <p>I am a real pizza addict, and even when I’m home I prefer your pizzas to all others. They taste awesome and are very affordable.</p>
        <h6>By Fred McMillan</h6>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <Image src="testim.jpg" roundedCircle />
        <h3>Perfect and Tasty Sushi</h3>
        <p>Thanks so much for the gorgeous sushi rolls and burgers on Saturday. We loved them - so beautiful and yummy!</p>
        <h6>By Jane Perez</h6>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <Image src="testimo.jpg" roundedCircle />
        <h3>We Order Burgers Here</h3>
        <p>When you work in the office, sometimes it is hard to eat on time. However, thanks to Food Delivery, we order tasty burgers for our office almost everyday!

          </p>
        <h6>By Sam Lee</h6>
        </div>
    </div>
    </Container>
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

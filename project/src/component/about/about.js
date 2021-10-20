import React from 'react'
import './about.css';
import { Container,Card,CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const About = () => {
    return (
        <div>
             <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 cc" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">About Us</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">About Us</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>
<section className="pad">
    <Container/>
<div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
        <img src="box.jpg"></img>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
        <h1 className="ab">A Few Words About Food Delivery</h1>
        <p className="ot">Food Delviery, one of today’s most renowned food delviery services, was established in 2013, as a quick and secure method to order something for anyone with any taste - from burger lovers to fans of sushi and seafood.</p>
        <button className="but"><Link to="/fullmenu">See Our Menu</Link></button>
    </div>
</div>
</section>
<section class="about-section sec-padding" id="about">
<div class="container">
    <div class="row">
        <div class="section-title">
            <h2 data-title="our story">2010</h2>
        </div>
    </div>
    <div class="row">
        <div class="about-text">
        <h3>Idea</h3>
        <p>It all started from a single idea. We wanted to create a <br/>place that would offer its customers easy ordering and<br/> delivery of their favorite dishes.</p>
        </div>
        <div class="about-img">
       <div class="img-box">
           <h5> 20 years+ experience</h5>
           <img src="01.jpg" alt=""></img>
       </div>
        </div>
    </div>
</div>
</section>
<section  class="about-section sec-padding" id="about">
<div class="container">
    <div class="row">
        <div class="section-title">
            <h2>2016</h2>
        </div>
    </div>
    <div class="row">
   
        <div class="about-img">
       <div class="img-box">
           <h5> 20 years+ experience</h5>
           <img src="02.jpg" alt=""></img>
       </div>
        </div>
        <div class="about-text">
        <h3>Opening</h3>
        <p>After making necessary preparations, completing our <br/> staff with experienced people, we were ready for new<br/> guests and clients.</p>
        </div>
    </div>
</div>
</section>
<section  class="about-section sec-padding" id="about">
<div class="container">
    <div class="row">
        <div class="section-title">
            <h2>2021</h2>
        </div>
    </div>
    <div class="row">
   <div class="about-text">
        <h3>Today</h3>
        <p>We are devoted to our customers and to business of our <br/> life - quick and secure food delivery. And that’s why <br/> today we’re recognized as #1 in the industry.</p>
        </div>
        <div class="about-img">
       <div class="img-box">
           <h5> 20 years+ experience</h5>
           <img src="03.jpg" alt=""></img>
       </div>
        </div>
    </div>
</div>
</section> 
<section>
<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
   
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="cofee.jpg" class="d-block w-100 kom" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
          <h5 className="thik">Our Partners</h5>
          <p className="bhul">We are glad to offer our visitors high-quality burgers and pizzas, but we also believe our whole <br/>business couldn’t be successful without our partners.</p>
          <div class="row ii">
    <div class="col-lg-3 col-md-3 col-sm-6">
        <img src="04.png"></img>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-6">
        <img src="05.png"></img>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-6">
        <img src="06.png"></img>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-6">
        <img src="07.png"></img>
    </div>
</div>
        </div>
      </div>
      </div>
 </div>
</div>

</section>
<section>
    
    <h1 className="fal">Meet Our Team</h1>
    <p className="bkr">Our team is what marks us out from other delivery services. Everyone of us, from founders to <br/>couriers, is a part of a friendly family that always welcomes new members!</p>
    <Container>
   <div class="row">
       <div class="col-lg-4 col-md-4 col-sm-12">
    <Card style={{ width: '20rem' }} className="hovb">
  <Card.Img variant="top" src="mey.jpg" className="sano" />
  <Card.Body className="tran">
    <Card.Title className="touch">Amanda Stark</Card.Title>
    <Card.Text className="it">
      CEO "Food Delivery"
    </Card.Text>
    <div class="image_overlay">
        <div class="image">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-instagram in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-facebook in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-twitter in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-google-plus-g in"></i>
                </div>
            </div>
        </div>
    </div>
  </Card.Body>
</Card>
</div>
<div class="col-lg-4 col-md-4 col-sm-12">
    <Card style={{ width: '20rem' }} className="hovb">
  <Card.Img variant="top" src="chele.jpg" className="sano"  />
  <Card.Body className="tran">
    <Card.Title className="touch">Edward Robbinson</Card.Title>
    <Card.Text className="it">
     Head Manager
    </Card.Text>
    <div class="image_overlay">
        <div class="image">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-instagram in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-facebook in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-twitter in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-google-plus-g in"></i>
                </div>
            </div>
        </div>
    </div>
  </Card.Body>
</Card>
</div>
<div class="col-lg-4 col-md-4 col-sm-12">
    <Card style={{ width: '20rem' }} className="hovb">
  <Card.Img variant="top" src="girl.jpg" className="sano" />
  <Card.Body className="tran">
    <Card.Title className="touch">Rebecca Ives</Card.Title>
    <Card.Text className="it">
      Marketing Expert
    </Card.Text>
    <div class="image_overlay">
        <div class="image">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-instagram in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-facebook in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-twitter in"></i>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                <i class="fab fa-google-plus-g in"></i>
                </div>
            </div>
        </div>
    </div>
  </Card.Body>
</Card>
</div>
</div>
</Container>
</section> 
<section className="space">
<iframe  className="google"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29482.905629073084!2d88.34517134673422!3d22.52806324414412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772731643a9d%3A0x491d16b4d242a9a2!2sBallygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1634564453080!5m2!1sen!2sin" width="1000" height="450" ></iframe>
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

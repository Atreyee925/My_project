import React from 'react'
import { Container,ProgressBar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./contact.css"
export const Contact = () => {
    return (
        <div>
            <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 cc" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Contacts</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Contact</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>

<section>
  <Container>
    <div class="row heigh">
        <div class="col-lg-8 col-md-6 col-sm-12">
            <h1>Get in Touch</h1>
            <p className="soman">We are available 24/7 by fax, e-mail or by phone. You can also use our quick contact form to ask a question about our services <br/>that we offer on a regular basis. We would be pleased to answer your questions.</p>
            <br/>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
           <label for="name" className="labi">Name</label><br/>
            <input type="text" name="name" placeholder="Enter your Name" className=" nam"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="name" className="lab">Phone</label><br/>
            <input type="number" name="phone" placeholder="Enter Phone " className="pho"/>
            </div>
            </div>
            <div class="row just">
                <div class="col-lg-12 col-md-12 col-sm-12 ">
                    <label for="message"> Your Message</label><br/>
                    <input type="text" name="message" placeholder="Write your Message Here" className="alada"/>
                </div>
            </div>
            <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="email" className="labi"> E-MAIL</label><br/>
                <input type="email" name="email" placeholder="Enter your email" className="jala"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
               <button className="butto"> SEND MESSAGE</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-lg-4 col-sm-12">
            <h4 className="foll">FOLLOW US</h4>
            <ProgressBar variant="danger" now={7}/>
            <div class="row inst">
                    <div class="col-lg-1 col-md-3 col-sm-6" >
                    <i class="fab fa-instagram inn"></i>
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-6" >
                    <i class="fab fa-facebook inn"></i>
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-6" >
                    <i class="fab fa-twitter inn"></i>
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-6" >
                    <i class="fab fa-google-plus-g inn"></i>
                    </div>
                </div>
                <h4 className="hoche">PHONE</h4>
                <ProgressBar variant="danger" now={7}/>
                <div class="row alpo">
                  <div class="col-lg-2 col-md-12 col-sm-12">
                  <i class="fas fa-phone-alt"></i> 
                </div>
                <div class="col-lg-10 col-md-12 col-sm-12">
                <p className="notu"> 1-8000-1234-567</p>
                </div>
                </div>
                <h4 className="hoche">ADDRESS</h4>
                <ProgressBar variant="danger" now={7}/>
                <div class="row fonsi">
                  <div class="col-lg-2 col-md-12 col-sm-6">
                  <i class="fas fa-map-marker-alt"></i>
                 </div>
                 <div class="col-lg-10 col-md-12 col-sm-6">
                  <p className="aa">2/148E Park Street kolkata 700056</p>
                 </div>
                </div>
                <h4 className="hoche">OPENING HOURS</h4>
                <ProgressBar variant="danger" now={7}/>
                <div class="row cons">
                  <div class="col-lg-2 col-md-2 col-sm-6">
                  <i class="far fa-clock"></i>
                  </div>
                  <div class="col-lg-10 col-md-10 col-sm-6">
                    <p className="coni">9:00–18:00</p>
                  </div>
                </div>
          </div>
    </div>
    </Container>
</section>
<section className="space">
       <iframe  className="google"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29482.905629073084!2d88.34517134673422!3d22.52806324414412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772731643a9d%3A0x491d16b4d242a9a2!2sBallygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1634564453080!5m2!1sen!2sin" width="1300" height="450" ></iframe>
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

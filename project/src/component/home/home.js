import React from 'react'
import { Carousel, Container,Card,Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './home.css';
import { Link } from 'react-router-dom';

export const Home  = () => {
  
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      // className="d-block w-100 tuni"
      alt="" width="1290" height="500"
      class="img-responsive"
      src="table.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="set">
      <h3  data-caption-animate="fadeInUpSmall" data-caption-delay="100"className="midii">Your Favourite</h3>
      <h1 className="lar">FOOD DELIVERY SERVICE</h1>
      <p className="par">Welcome to Food Delivery, a place where you can order your favorite restaurant dishes, drinks, and desserts at affordable price. We are glad to offer you the best food in the area to everyone.
     </p>
     <button className="but">ORDER ONLINE</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      // className="d-block w-100 tuni"
      alt="" width="1290" height="500"
      class="img-responsive"
      src="break.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="set">
      <h3 className="midii">Affordable Organic Food</h3>
      <h1 className="lar">HEALTHY BREAKFASTS</h1>
      <p className="par">Looking for fresh and tasty breakfasts and lunches? At Food Delivery, you can order any kind of morning snack from local restaurants at reasonable prices without any extra charges.</p>
      <button className="but">ORDER ONLINE</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      // className="d-block w-100 tuni"
      alt="" width="1290" height="500"
      class="img-responsive"
      src="pizza.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="set">
      <h3 className="midii">A Variety of Dishes</h3>
      <h1 className="lar">PIZZAS AND SEAFOOD</h1>
      <p className="par">In our menu you can find lots of tasty and interesting dishes, including pizzas of all kinds. We also offer a wide range of seafood dishes, even if you are just looking for an affordable snack.</p>
      <button className="but">ORDER ONLINE</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<section className="food"> <h1 className="larg">Welcome to Food Delivery</h1>
  <p className="gr">Food Delivery is the best way to find local restaurants that deliver to you or quickly order food online .<br/> Whether looking for breakfast, lunch, dinner or late night snack, we have it all.</p>
  <Container>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12">
    <div class="zoomImage">
          <img src="burger.jpg" alt="" class="img-responsive eitai"></img>
          <div class="text-box">
            <h5 className="bigo">Fresh Menu</h5>
            <p>Burger + Salad + Drinks</p>
          </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
    <div class="zoomImage">
          <img src="mexican.jpg" alt=""class="img-responsive eita" ></img>
          <div class="text-box">
            <h5 className="bigo">Burger</h5>
            <p className="sma">Burger + Salad + Drinks</p>
          </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
    <div class="zoomImage">
          <img src="food.jpg" alt=""class="img-responsive eita" ></img>
          <div class="text-box">
            <h5 className="bigo">Fresh Menu</h5>
            <p>Burger + Salad + Drinks</p>
          </div>
        </div>
    </div>
  </div>
  </Container>
 </section>
<section className="bac">
  <h1>OUR MENU</h1>
  <Container>
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12">
    <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="sushi-7.png" />
  <Card.Body>
    
  <Button variant="primary" className="ani"><Link to="/sus"> <h5 className="anim">Sushi</h5></Link></Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="burger-7.png" />
  <Card.Body>
    
  <Button variant="primary" className="anii"><Link to="/bur"> <h5 className="anim">Burgers</h5></Link></Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="pizza-7.png" />
  <Card.Body>
    
  <Button variant="primary" className="aniii"><Link to="/pizza"> <h5 className="anim">Pizzas</h5></Link></Button>
  </Card.Body>
</Card>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="sandwich-7.png" />
  <Card.Body>
    
  <Button variant="primary" className="aniiiii"><Link to="/sand"> <h5 className="anim">Sandwiches</h5></Link></Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="mexican-7.png" />
  <Card.Body>
    
  <Button variant="primary" className="aniiiiii"> <Link to="/mex"> <h5 className="anim">Tacos</h5></Link></Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="barbecue-7.png" />
  <Card.Body>
    
  <Button variant="primary" className="aniiii"><Link to="/barb"> <h5 className="anim">Barbecue</h5></Link></Button>
  </Card.Body>
</Card>
    </div>
  </div>

  </Container>
</section>
        <section>
          <Container>
          <div class="row ">
            <div class="col-lg-8 col-md-8 col-sm-12">
              <img src="depos.jpg"  class="img-responsive"></img>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">

            <div class="card text-white bg-secondary mb-3" style={{width: '20rem',height:'25rem'}}>
  <div class="card-header tris">Best Offer</div>
  <div class="card-body">
    <h5 class="card-title nn">- Greek Pizza</h5>
    <h3 class="card-title dol">$29.00</h3> <strike  className="flex">$60.00</strike>
    <p class="card-text su">Enjoy the most popular pizza of Food <br/> 
        Delivery.</p>
        <button className="butk"><Link to="/fin">ORDER ONLINE</Link></button>
  </div>
</div>

</div>
</div>
 </Container>
        </section>
        <section className="seco">
          <div className="testi">
        <Slider>
          <Cardi img="https://livedemo00.template-help.com/wt_62172/images/index-testimonials-1-191x191.jpg"/>
         
          <Cardi img="https://livedemo00.template-help.com/wt_62172/images/index-testimonials-2-191x191.jpg"/>
          <Cardi img="https://livedemo00.template-help.com/wt_62172/images/index-testimonials-4-191x191.jpg"/>
          <Cardi img="https://livedemo00.template-help.com/wt_62172/images/index-testimonials-3-191x191.jpg"/>
        </Slider>
        </div>
        </section>
       <section className="spac">
       <iframe  className="google"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29482.905629073084!2d88.34517134673422!3d22.52806324414412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772731643a9d%3A0x491d16b4d242a9a2!2sBallygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1634564453080!5m2!1sen!2sin" width="700" height="450"></iframe>
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
const Cardi=({img})=>{
  return(
    <div className="alig">
     
       <Image src={img}roundedCircle  />
       <h1 className="ratri">High Quality Service</h1>
          <p className="akn">Great food at reasonable prices. Great service and the owners are terrific</p>
       <p className="dboi">By John Smith</p>
       
    </div>
  )
}

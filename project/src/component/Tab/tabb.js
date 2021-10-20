import React from 'react'
import './tab.css';
import { Link } from 'react-router-dom';
import { Tab,Tabs,Row,Col,Nav, Container,Accordion } from 'react-bootstrap';
export const Tabb = () => {
    return (
        <div>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 lact" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Tabs</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Tabs</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>  
<section>
  
    <h1 className="dishu">Tabs</h1>
    <p className="maa">With modern and intuitive interface of tabs and accordions, you can<br/> control contents to be organised within a single frame.</p>
    <h4 className="trishuu">Horizontal Tabs</h4>
    <Container/>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 neao">
  <Tab eventKey="home" title="ALL">
   <p className="baba">Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With<br/> advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of <br/>interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has<br/> been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time. Text styling allows<br/> scanning the pages quickly.
<br/><br/>Site navigation is extremely intuitive and user-friendly. You will always know where you are now and will be able to skip from one page to another with<br/> a single mouse click. We use only trusted, verified content, so you can believe every word we are saying. We are always happy to greet the new visitors<br/> on our site.
</p>
  </Tab>
  <Tab eventKey="profile" title="TYPE 1" >
  <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With<br/> advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of <br/>interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has<br/> been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time. Text styling allows<br/> scanning the pages quickly.
<br/><br/>Site navigation is extremely intuitive and user-friendly. You will always know where you are now and will be able to skip from one page to another with<br/> a single mouse click. We use only trusted, verified content, so you can believe every word we are saying. We are always happy to greet the new visitors<br/> on our site.
</p>
  </Tab>
  <Tab eventKey="contact" title="TYPE 2" >
  <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With<br/> advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of <br/>interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has<br/> been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time. Text styling allows<br/> scanning the pages quickly.
<br/><br/>Site navigation is extremely intuitive and user-friendly. You will always know where you are now and will be able to skip from one page to another with<br/> a single mouse click. We use only trusted, verified content, so you can believe every word we are saying. We are always happy to greet the new visitors<br/> on our site.
</p>
  </Tab>
  <Tab eventKey="contact" title="TYPE 3">
  <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With<br/> advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of <br/>interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has<br/> been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time. Text styling allows<br/> scanning the pages quickly.
<br/><br/>Site navigation is extremely intuitive and user-friendly. You will always know where you are now and will be able to skip from one page to another with<br/> a single mouse click. We use only trusted, verified content, so you can believe every word we are saying. We are always happy to greet the new visitors<br/> on our site.
</p>
</Tab>
</Tabs>
</section> 
<section className="plate">
  <h4>Vertical Tab</h4>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" className="dista">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className="dista">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
           <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time. Text styling allows scanning the pages quickly.
Site navigation is extremely intuitive and user-friendly. You will always know where you are now and will be able to skip from one page to another with a single mouse click. We use only trusted, verified content, so you can believe every word we are saying. We are always happy to greet the new visitors on our site.
</p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page. It will tell you lots of interesting things about our company, its products and services, highly professional staff and happy customers. Our site design and navigation has been thoroughly thought out. The layout is aesthetically appealing, contains concise texts in order not to take your precious time. Text styling allows scanning the pages quickly.
Site navigation is extremely intuitive and user-friendly. You will always know where you are now and will be able to skip from one page to another with a single mouse click. We use only trusted, verified content, so you can believe every word we are saying. We are always happy to greet the new visitors on our site.
</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

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

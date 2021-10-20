import React from 'react'
import './final.css';
import {Container, Tab,Tabs} from 'react-bootstrap'

export const Final = () => {

    return (
        <div>
            <div className="bag">
            <Container >
            <h1 className="whit"> Our Menu</h1>
           <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="pizza" title="Pizza">
 
                <div class="row menu-tab-content active" id="Pizza">
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="pizza.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Peproni Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $40.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="tikka.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3>  Chicken Tikka pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $60.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="Pepper.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3>Barbecue Pepper Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $50.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="sweet.jpeg" alt="menu item thumbnail" className="you"></img>
                            <h3>  Sweet Corn Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $30.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="veg.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Supreme Veg Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $50.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="Paneer.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Tandoori Paneer Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $60.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="cheesy.cms" alt="menu item thumbnail" className="you"></img>
                            <h3>Cheesy Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $80.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="black.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3>  Jalapeno Pizza</h3>
                        </div>
                        <div class="menu-item-price">
                            $40.00
                        </div>
                    </div>
                    </div>
  </Tab>
  <Tab eventKey="burger" title="Burger">
  <div class="row menu-tab-content active" id="Pizza">
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="burger.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Cheesy Burger</h3>
                        </div>
                        <div class="menu-item-price">
                            $15.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="download.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Tandoori Burger</h3>
                        </div>
                        <div class="menu-item-price">
                            $160.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="Cheesburger.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3>Jalapeno Burger</h3>
                        </div>
                        <div class="menu-item-price">
                            $150.00
                        </div>
                    </div>
                    </div>
  </Tab>
  <Tab eventKey="sandwich" title="Sandwich">
  <div class="row menu-tab-content active" id="Pizza">
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="sandwitch.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Grilled Chicken Sandwich</h3>
                        </div>
                        <div class="menu-item-price">
                            $25.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="sandwich-7.png" alt="menu item thumbnail" className="you"></img>
                            <h3> Cheese Sandwich</h3>
                        </div>
                        <div class="menu-item-price">
                            $15.00
                        </div>
                    </div>
                    </div>
  </Tab>
  <Tab eventKey="mexican" title="Mexican">
  <div class="row menu-tab-content active" id="Pizza">
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="mexican.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Mexican Roll</h3>
                        </div>
                        <div class="menu-item-price">
                            $125.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="taco.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Tacos</h3>
                        </div>
                        <div class="menu-item-price">
                            $215.00
                        </div>
                    </div>
                    </div>
  </Tab>
  <Tab eventKey="barbecue" title="Barbecue">
  <div class="row menu-tab-content active" id="Pizza">
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="barbe.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Grilled Barbecue Chicken</h3>
                        </div>
                        <div class="menu-item-price">
                            $190.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="barbecue-7.png" alt="menu item thumbnail" className="you"></img>
                            <h3> Barbecue Wings</h3>
                        </div>
                        <div class="menu-item-price">
                            $240.00
                        </div>
                    </div>
                    </div>
  </Tab>
  <Tab eventKey="sushi" title="Sushi">
  <div class="row menu-tab-content active" id="Pizza">
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="sushi.jpg" alt="menu item thumbnail" className="you"></img>
                            <h3> Sushi</h3>
                        </div>
                        <div class="menu-item-price">
                            $325.00
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-title">
                            <img src="sushi-7.png" alt="menu item thumbnail" className="you"></img>
                            <h3> Sushi</h3>
                        </div>
                        <div class="menu-item-price">
                            $300.00
                        </div>
                    </div>
                    </div>
  </Tab>
</Tabs>
</Container>
</div>
        </div>
    )
}

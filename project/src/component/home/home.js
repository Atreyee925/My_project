import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

import './home.css';
export const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 tuni"
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
      className="d-block w-100 tuni"
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
      className="d-block w-100 tuni"
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
        </div>
    )
}

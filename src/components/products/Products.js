import React from "react";
import card1 from "../../images/card1.svg";
import card2 from "../../images/card2.svg";
import card3 from "../../images/card3.svg";
import card4 from "../../images/card4.svg";
import card5 from "../../images/card5.svg";
import card6 from "../../images/card6.svg";
import card7 from "../../images/card7.svg";
import card8 from "../../images/card8.svg";
import star from "../../images/Five star.svg";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

let PRODUCTS = [
  {
    id: 1,
    image: card1,
    title: "Breed Dry Dog Food",
    rating: 35,
    price: 100,
  },
  {
    id: 2,
    image: card2,
    title: "CANON EOS DSLR Camera",
    rating: 95,
    price: 360,
  },
  {
    id: 3,
    image: card3,
    title: "Breed Dry Dog Food",
    rating: 325,
    price: 700,
  },
  {
    id: 4,
    image: card4,
    title: "Curology Product Set ",
    rating: 145,
    price: 500,
  },
  {
    id: 5,
    image: card5,
    title: "Kids Electric Car",
    rating: 65,
    price: 960,
  },
  {
    id: 6,
    image: card6,
    title: "Jr. Zoom Soccer Cleats",
    rating: 35,
    price: 1160,
  },
  {
    id: 7,
    image: card7,
    title: "GP11 Shooter USB Gamepad",
    rating: 55,
    price: 660,
  },
  {
    id: 8,
    image: card8,
    title: "Quilted Satin Jacket",
    rating: 55,
    price: 660,
  },
];
let card = PRODUCTS.map((el) => (
  <div className="card" key={el.id}>
    <div className="image">
      <div className="circle">
        <FaRegHeart className="heart" />
      </div>
      <div className="circle eye1">
        <FiEye className="eye" />
      </div>
      <img src={el.image} alt="" />
      <button className="card__btn">Add To Card</button>
    </div>
    <h5>{el.title}</h5>
    <span>
      <h6>$ {el.price}</h6>
      <img src={star} alt="Star" />
      <p>( {el.rating} )</p>
    </span>
  </div>
));
function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="title">
          <div className="circle"></div>
          <h5>Our Products</h5>
        </div>
        <div className="wrapper">{card}</div>
        <button className="btn">View All Products</button>
      </div>
    </section>
  );
}

export default Products;

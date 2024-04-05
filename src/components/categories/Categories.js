import React from "react";
import categoryImg1 from "../../images/phone.svg";
import categoryImg2 from "../../images/computer.svg";
import categoryImg3 from "../../images/watch.svg";
import categoryImg4 from "../../images/camera.svg";
import categoryImg5 from "../../images/headphones.svg";
import categoryImg6 from "../../images/headphones.svg";
let categoryBox = [
  {
    id: 1,
    url: categoryImg1,
    name: "Phone",
  },

  {
    id: 2,
    url: categoryImg2,
    name: "Computer",
  },

  {
    id: 3,
    url: categoryImg3,
    name: "Watch",
  },

  {
    id: 4,
    url: categoryImg4,
    name: "Camera",
  },

  {
    id: 5,
    url: categoryImg5,
    name: "Headphones",
  },
  {
    id: 6,
    url: categoryImg6,
    name: "Gaming",
  },
];
let images = categoryBox.map((el) => (
  <div key={el.id} className="card">
    <img src={el.url} alt="" />
    <h5>{el.name}</h5>
  </div>
));
function Categories() {
  return (
    <section className="category">
      <div className="container">
        <div className="title">
          <div className="circle"></div>
          <h5>Categories</h5>
        </div>
        <h2>Browse By Category</h2>
        <div className="wrapper">{images}</div>
        <hr />
      </div>
    </section>
  );
}

export default Categories;

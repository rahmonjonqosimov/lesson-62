import React from "react";
let categoryBox = [
  {
    id: 1,
    url: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="47"
        viewBox="0 -960 960 960"
        width="47"
      >
        <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" />
      </svg>
    ),
    name: "Phone",
  },

  {
    id: 2,
    url: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="47"
        viewBox="0 -960 960 960"
        width="47"
      >
        <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
      </svg>
    ),
    name: "Computer",
  },

  {
    id: 3,
    url: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="47"
        viewBox="0 -960 960 960"
        width="47"
      >
        <path d="M360-500v-60h240v60H360Zm40 120v-60h160v60H400ZM360-80l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L600-80H360Zm120-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H420l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T480-200q-19 0-37.5-2.5T404-210l16 50Zm-16-640h152-152Zm16 640h-16 152-136Z" />
      </svg>
    ),
    name: "Watch",
  },

  {
    id: 4,
    url: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="47"
        viewBox="0 -960 960 960"
        width="47"
      >
        <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
      </svg>
    ),
    name: "Camera",
  },

  {
    id: 5,
    url: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="47"
        viewBox="0 -960 960 960"
        width="47"
      >
        <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z" />
      </svg>
    ),
    name: "Headphones",
  },
  {
    id: 6,
    url: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="47"
        viewBox="0 -960 960 960"
        width="47"
      >
        <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm120-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm300 0q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480ZM160-320v-320 320Z" />
      </svg>
    ),
    name: "Gaming",
  },
];
let images = categoryBox.map((el) => (
  <div key={el.id} className="card">
    {el.url}
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

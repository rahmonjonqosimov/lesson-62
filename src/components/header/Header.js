import React from "react";
import { IoIosSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

let LINKS = ["Home", "Contact", "About", "Sign in"];
let link = LINKS.map((el, i) => (
  <li key={i}>
    <a href="#" className="link">
      {el}
    </a>
  </li>
));

function Header() {
  return (
    <section className="header">
      <div className="container header__content">
        <a href="" className="logo">
          Exclusive
        </a>
        <ul>{link}</ul>
        <div className="component">
          <form>
            <input
              type="search"
              placeholder="What are you looking for?"
              required
            />
            <button>
              <IoIosSearch className="search" />
            </button>
          </form>
          <GoHeart className="heart" />
          <BsCart3 className="heart" />
        </div>
      </div>
    </section>
  );
}

export default Header;

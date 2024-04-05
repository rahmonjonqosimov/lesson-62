import React from "react";

function Topheader() {
  return (
    <section className="top__header">
      <div className="container top__header__content">
        <div></div>
        <span>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#">ShopNow</a>
        </span>
        <select>
          <option value="eng">English</option>
          <option value="rus">Russian</option>
          <option value="us">Uzbek</option>
        </select>
      </div>
    </section>
  );
}

export default Topheader;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Item } from './Item';
import { AiFillStar } from "react-icons/ai";
import "./Item.css";
const MySlider = ({ items }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1300,
    dots: true,
    dotsClass: "customdot",
  };

  const styleProduct = {
    margin: "0 20px",
    height: "289px",
  };

  return (
    <Slider {...settings}>
      {items.map((product) => (
        <div style={styleProduct} key={product.id} className="product-card">
          <div className="card">
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <div className="star">
                {Array.from(Array(Math.ceil(product.rate)).keys()).map(
                  (star) => (
                    <AiFillStar key={star} color="yellow" />
                  )
                )}
              </div>
              <p className="card-text">
                <b>{product.price} VND</b>
              </p>
              <button className="btn btn-primary">Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;

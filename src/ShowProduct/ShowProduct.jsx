// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Item } from './Item';
import {AiFillStar} from "react-icons/ai";
import "./Item.css";
import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowProduct = () => {
  return (<>
    <div className='products'>
        {Item.map((product) => (
                <div key={product.id} className='product' >
                    <img className='anh' src={product.image} alt={product.name}/>
                    <p className='name'><b>{product.name}</b></p>
                    <div className='star'>
                        {Array.from(Array(Math.ceil(product.rate)).keys()).map((star) => (
                            <AiFillStar key={star} color='yellow'/>
                        ))}
                    </div>
                    <div className='price'><b>{product.price} VND</b></div>
                    <button className='them' >Thêm vào giỏ hàng</button>
                </div>
        ))
        }
    </div>

    <p className='goiY'><b>Gợi ý</b></p>

    <Carousel data-bs-theme="dark" className='itemSlow'>
     {Item.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <Carousel.Item className='itemSlow'>
        <img
          className="anh2"
          src={product.image}
          alt={product.name}
        />
         <Carousel.Caption>
          <p className='name'>{product.name}</p>
          <p className='name'><b>{product.name}</b></p>
          <div className='star'>
                {Array.from(Array(Math.ceil(product.rate)).keys()).map((star) => (
                    <AiFillStar key={star} color='yellow'/>
                ))}
            </div>
            <div className='price'><b>{product.price} VND</b></div>
            <button className='them2' >Thêm vào giỏ hàng</button>          
        </Carousel.Caption>
      </Carousel.Item>
    ))} 
    </Carousel>
      
    </>
  )
}

export default ShowProduct;
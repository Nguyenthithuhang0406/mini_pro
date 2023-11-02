// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Item } from './Item';
import {AiFillStar} from "react-icons/ai";
import "./Item.css";

const ShowProduct = () => {
  return (
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
  )
}

export default ShowProduct;
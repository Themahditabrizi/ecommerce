import React from 'react'
import { PRODUCTS } from '../../products'
import {Product } from './product'
import "./shop.css";
import Slider from '../../components/Slideshow';
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <Slider/>
        </div>
        <div className='products'>
        {PRODUCTS.map((product) => (
            <Product data={product} />
        ))}
        </div>
        
    </div>
  )
}

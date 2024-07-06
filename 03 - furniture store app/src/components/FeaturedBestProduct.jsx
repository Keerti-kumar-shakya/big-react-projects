import React, { useState } from 'react'
import { useGlobalContext } from '../Context';
import TopSellProductSingleCard from './TopSellProductSingleCard';


const FeaturedBestProduct = () => {
  const {theme} = useGlobalContext()

  return (
    <article className='company-best-featured-product-container'>
      <h1 className='top-selling-product-heading'
      style={{color: theme && 'white'}}
      >
        Top Selling Products
        </h1>
      <div className='underline' ></div>

      <div className="top-selling-product-display">
        <TopSellProductSingleCard
      
         
        />
      </div>
    </article>
  )
}

export default FeaturedBestProduct

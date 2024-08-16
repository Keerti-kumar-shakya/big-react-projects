import  {priceModifier} from '../utils/pricing.js';
import { useGlobalContext } from '../Context';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PaginationData } from '../pagination.js';



const TopSellProductSingleCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [compHover, setComHover] = useState(0);
  const {theme, singleProductData, axiosData} = useGlobalContext();

  const page = 3;
  const dataPage = PaginationData(page, axiosData)
  console.log(dataPage);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const data = parseInt(e.currentTarget.dataset.id);
    setComHover(data)
  };

  const handleMouseleave = () => {
    setIsHovered(false);
  }; 


 
  return (
    <>
    { 
      dataPage[0].map((product, index) => {
        const {id, name, image, price} = product;
        return (
     <NavLink to = 'products/id'

     onClick={(e) => singleProductData(e)}
     data-link = {id}
     className='top-selling-product-single-card'
     data-id = {product.id}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseleave}
     key={id}
     style={{boxShadow: theme && '0 0 10px rgba(0, 0, 0, 0.5)',
            backgroundColor:( theme && index === compHover) && isHovered?'rgba(0, 0,0 , 0.3)' : 'rgba(50, 50, 50, 0.3)'  
          }}
           
     >
      <img className='selling-image' src= {image} />
        <div className="name-price-container">
          <div className="top-selling-product-name" style={{color: theme && 'white'}}>{name}</div>
          <div className="top-selling-product-price"
          style={{color: theme && 'lightsalmon'}}
          >${priceModifier(price)}</div>
        </div>
     </NavLink>
        )
      })
    }
    </>
  )
}

export default TopSellProductSingleCard

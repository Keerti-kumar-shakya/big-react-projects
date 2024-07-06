import  {priceModifier} from '../utils/pricing.js';
import { useGlobalContext } from '../Context';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const top_products = [
  {id: 'recotY5Nh00DQFdkm', 
   name: 'dining table',
   img: 'https://www.course-api.com/images/store/product-5.jpeg',
   price: '42999'
  },

  {id: 'rec1Ntk7siEEW9ha1',
  name: 'emperor bed', 
   img: 'https://www.course-api.com/images/store/product-6.jpeg',
   price: '23999'
  },

  {id: 'recoW8ecgjtKx2Sj2',
   name: 'leather chair', 
   img: 'https://www.course-api.com/images/store/product-9.jpeg',
   price: '20099'
  }

]


const TopSellProductSingleCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [compHover, setComHover] = useState(0)

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const data = parseInt(e.currentTarget.dataset.id);
    setComHover(data)
  };

  const handleMouseleave = () => {
    setIsHovered(false);
  }; 
  const {theme, singleProductHandle} = useGlobalContext();

  return (
    <>
    {
      top_products.map((product, index) => {
        const {id, name, img, price} = product;
        return (
     <Link to = {`products/id`} 
     onClick={singleProductHandle}
     data-link = {id}
     className='top-selling-product-single-card'
     data-id = {index}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseleave}
     key={id}
     style={{boxShadow: theme && '0 0 10px rgba(0, 0, 0, 0.5)',
            backgroundColor:( theme && index === compHover) && isHovered?'rgba(0, 0,0 , 0.3)' : 'rgba(50, 50, 50, 0.3)'  
          }}
           
     >
      <img className='selling-image' src= {img} />
        <div className="name-price-container">
          <div className="top-selling-product-name" style={{color: theme && 'white'}}>{name}</div>
          <div className="top-selling-product-price"
          style={{color: theme && 'lightsalmon'}}
          >${priceModifier(price)}</div>
        </div>
     </Link>
        )
      })
    }
    </>
  )
}

export default TopSellProductSingleCard

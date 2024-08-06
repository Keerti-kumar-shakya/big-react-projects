import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useGlobalContext } from '../Context';
import { useState } from 'react';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';

const ProductsContainer = ({showData, count}) => {
  const [styleContainer, useStyleContainer] = useState(false);
  const {theme} = useGlobalContext();

 const totalProduct = showData.map((product) => product).flat();
 
 //console.log(totalProduct);

  return (
   <div className="product-container">

    <div className="total-flex-grid-container">
      <p className="total-product-length"> {totalProduct.length} products</p>   

        <div className="grid-list-container">
          <button 
          className='grid-style-btn' 
          style={{backgroundColor: theme && 'lightseagreen'}}
          onClick={() => useStyleContainer(false)}  
          >
            <BsFillGridFill />
          </button>

          <button 
          className='list-style-btn' 
          style={{color: theme && 'lightseagreen'}}
          onClick={() => useStyleContainer(true)}  
          >
            <BsList />
          </button>
        </div>
    </div>

    <div className="products-single-container">
       {styleContainer? <ProductList 
       count = {count} 
       finalData = {showData}
       /> 
       : 
       <ProductGrid  
       count = {count} 
       finalData = {showData}
       />}
    </div>
   </div>
  )
}

export default ProductsContainer;

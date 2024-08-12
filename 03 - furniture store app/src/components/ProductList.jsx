import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import  {priceModifier} from '../utils/pricing.js'

const ProductList = ({finalData, count}) => {
  const {theme, singleProductData} = useGlobalContext();
  
  const displayData = finalData[count];

  return (
    <div  className="product-list-container">
      {displayData.map((product) => <Link to='id' className="single-product-list-container active"
      onClick={(e) => singleProductData(e)}
      data-id = {product.id}
      key={product.id}
      >
      <div className="product-list-details">
        <img className="product-list-image active" src = {product.image} alt="" />

        <div className="product-list-name-company">
          <div 
          className="product-list-name"
          style={{color: theme && 'white'}}
          >{product.name}</div>
          <div className="product-list-company">{product.company}</div>
        </div>
      </div>  

      <div 
      className="product-list-price"
      style={{color: theme && 'white'}}
      >${priceModifier(product.price)}</div>
      </Link>
      
      )}
      
    </div>
  )
}
export default ProductList;
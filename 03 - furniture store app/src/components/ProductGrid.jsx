import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";


const ProductGrid = ({finalData, count}) => {

  //console.log(finalData);

  const {theme, singleProductData} = useGlobalContext();
  
  const displayData = finalData[count];

  return (

  <div to='id' 
  className="products-grid-container"
  >

    {displayData.map((product) => <Link to='id' 
    className={`single-grid-container ${theme && 'grid'}`}
    onClick={(e) => singleProductData(e)}
    data-id = {product.id}
    style={{backgroundColor: theme && 'transparent'}}
    key={product.id}
    >

    <div className="image-container">
      <img className="image" src= {product.image} alt= {product.name} />
    </div> 
    
    <div className="grid-product-detail">
      <p className="grid-product-name" style={{color: theme && 'white'}}>{product.name}</p>
      <p className="grid-product-price" style={{color: theme && 'lightgreen'}}>${Math.ceil(product.price/100).toFixed(2)}</p>
    </div>
   </Link>
    )}
  </div>
    
    
  )
}
export default ProductGrid;
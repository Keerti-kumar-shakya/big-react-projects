import { useGlobalContext } from "../Context";


const ProductGrid = ({finalData, count}) => {

  //console.log(finalData);

  const {theme} = useGlobalContext();
  
  const displayData = finalData[count];
  return (

<div className="products-grid-container">

    {displayData.map((product) => <div 

    className={`single-grid-container ${theme && 'grid'}`}
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
   </div>
    )}
</div>
    
    
  )
}
export default ProductGrid;
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { priceModifier } from "../utils/pricing";

const SingleProduct = () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const {singleProduct} = useGlobalContext();

 console.log(singleProduct);
 const {id,category, color, company, description, image, name, price, shipping} = singleProduct[0];



 console.log(color);
  return (
   <section className="single-product-container">   
    <nav className="single-product-link">
      <Link to= '/' className="home-link">Home</Link>
      <span className="greater-then-sign">&gt;</span>
      <Link to= '/products' className="products-link">Products</Link>
    </nav>

    <div className="product-description-container">

      <img className="single-product-image" src= {image} alt="" />
       
      <div className="product-details-container">

        <div className="product-name-company-price-container">
          <div className="product-name">{name}</div>
          <div className="product-company">{company}</div>
          <div className="product-price">${priceModifier(price)}</div>
        </div>

        <div className="product-desc">{description}</div>

        <div className="product-color-container">
          <div className="product-color-para">Colors</div>
          {color.map((color) => <button 
          key={color} 
          className="color-btn"
          style={{backgroundColor: color}}
          ></button>)}
          
        </div>

        <div className="product-quantity">
          <div className="product-quantity-name">Amount</div>
          <select className="product-input-quantity">
            {inputArray.map((number) => <option 
            key={number} 
            value = {number}
            >
              {number}
            </option>)}
            
          </select>
        </div>

      </div>
    </div>
   </section>
  )
}

export default SingleProduct;

import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { priceModifier } from "../utils/pricing";
import { toast } from "react-toastify";



const SingleProduct = () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
 const {setSelectColor, selectColor, theme, SetInputQuantity, cartData, inputQuantity, cartDisplay, cart} = useGlobalContext();



 const {id,category, colors, company, description, image, name, price, shipping} = cartData[0];


  return (
   <section className="single-product-container">   
    <nav className="single-product-link" >
      <Link to= '/' className="home-link" style={{color: theme && 'white'}}>Home</Link>
      <span className="greater-then-sign">&gt;</span>
      <Link to= '/products' className="products-link" style={{color: theme && 'white'}}>Products</Link>
    </nav>

    <div className="product-description-container">

      <img className="single-product-image" src= {image} alt="" />
       
      <div className="product-details-container">

        <div className="product-name-company-price-container">
          <div className="product-name" style={{color: theme && 'white'}}>{name}</div>
          <div className="product-company" >{company}</div>
          <div className="product-price" style={{color: theme && 'white'}}>${priceModifier(price)}</div>
        </div>

        <div className="product-desc" style={{color: theme && 'white'}}>{description}</div>

      <div className="product-color-container">
        <div className="product-color-para" style={{color: theme && 'white'}}>Colors</div>

          <div>
            {colors.map((colorSet) => <button 
            key={colorSet} 
            data-id = {colorSet}
            className={`color-btn ${colorSet === selectColor && 'color-active'}`}
            onClick={() => setSelectColor(colorSet)}
            style={{backgroundColor: colorSet}}
            ></button>)}         
          </div>
      </div>

        <div className="product-quantity">
          <div className="product-quantity-name" style={{color: theme && 'white'}}>Amount</div>

          <div className="input-border" style={{borderColor: theme && 'whitesmoke'}}>
          <select className="product-input-quantity" 
          style={{borderColor: theme && '#BF95F9'}}
          onClick={(e) => SetInputQuantity(e.target.value)}
          >
            {inputArray.map((number) => <option 
            key={number} 
            value = {number}
            >
              {number}
            </option>)}
            
          </select>
          </div>
        </div>

       <button className="add-btn"
       onClick={() => {

        if (selectColor && inputQuantity) {
           cartDisplay();
           setSelectColor('')
           SetInputQuantity('')
           toast.success('Item added')
          
        } else {
          toast.error('Please select color and amount')
        }

       }} 
       >add to bag</button>
      </div>
    </div>
   </section>
  )
}

export default SingleProduct;

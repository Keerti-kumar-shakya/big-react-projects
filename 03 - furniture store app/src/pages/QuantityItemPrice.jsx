import { useState } from "react";
import { useGlobalContext } from "../Context";
import { priceModifier } from "../utils/pricing";

const QuantityItemPrice = () => {
const [isHover, setIsHOver] = useState(false)

  const {cart, theme} = useGlobalContext()

  const onEnter = () => {
    setIsHOver(false)
  }

  const onLeave = () => {
    setIsHOver(true)
  }

const totalPrice = cart.reduce((currentPrice, allPrice) => currentPrice + allPrice.price * allPrice.inputQuantity ,0);

const shipping = 500;
 const tax =(totalPrice)*10/100

 const orderTotal = totalPrice + tax + shipping;
  return (

    <>
    <div className="total-quantity-price-container" style={{backgroundColor: theme && 'rgba(0,0,0,0.3)'}}>
      <div className="cart-total-price-tax-container">

        <div className="cart-sub-total" style={{color: theme && 'white'}}>Subtotal 
        <span className="sub-total-price" style={{color: theme && 'white'}}>${priceModifier(totalPrice)}</span>
        </div>
        

        <div className="cart-shipping" style={{color: theme && 'white'}}>shipping 
        <span className="shipping" style={{color: theme && 'white'}}>$5.00</span>
        </div>
       

        <div className="cart-tax" style={{color: theme && 'white'}}>tax 
        <span className="tax" style={{color: theme && 'white'}}>${priceModifier(tax)}</span>
        </div>
       
       <div className="cart-order-container" style={{color: theme && 'white'}}>order total
        <span className="order-total" style={{color: theme && 'white'}}>${priceModifier(orderTotal)}</span>
       </div>
      </div>

    </div>

      <button className='btn-checkout'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{backgroundColor: theme && isHover? '#FF7AC6' : 'rgb(148, 107, 91)',
       color: theme && 'black',
       borderColor:theme && isHover? '#FF7AC6' : 'rgb(148, 107, 91)',
       transition:theme && 'all 0.35s ease-in-out'
      }}     
      >proceed to checkout</button>
    </>
    
  )
}
export default QuantityItemPrice;
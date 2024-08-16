
import { useGlobalContext } from "../Context";
import { priceModifier } from "../utils/pricing";

const CheckoutPricing = () => {


  const {cart, theme} = useGlobalContext()


const totalPrice = cart.reduce((currentPrice, allPrice) => currentPrice + allPrice.price * allPrice.inputQuantity ,0);

const shipping = cart.length === 0? 0: 500;
 const tax =(totalPrice)*10/100

 const orderTotal = totalPrice + tax + shipping;

  return (
    <>
    <div className="checkout-price-container" style={{backgroundColor: theme && 'rgba(0,0,0,0.3)'}}>
      <div className="checkout-total-price-tax-container">

        <div className="checkout-sub-total" style={{color: theme && 'white'}}>Subtotal 
        <span className="check-sub-total-price" style={{color: theme && 'white'}}>${priceModifier(totalPrice)}</span>
        </div>
        

        <div className="checkout-shipping" style={{color: theme && 'white'}}>shipping 
        <span className="check-shipping" style={{color: theme && 'white'}}>${priceModifier(shipping)}</span>
        </div>
       

        <div className="checkout-tax" style={{color: theme && 'white'}}>tax 
        <span className="check-tax" style={{color: theme && 'white'}}>${priceModifier(tax)}</span>
        </div>
       
       <div className="checkout-order-container" style={{color: theme && 'white'}}>order total
        <span className="checkout-order-total" style={{color: theme && 'white'}}>${priceModifier(orderTotal)}</span>
       </div>
      </div>

    </div>
    </>
  )
}

export default CheckoutPricing;

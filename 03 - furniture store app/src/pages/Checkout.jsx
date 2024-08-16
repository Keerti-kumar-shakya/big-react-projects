import { useGlobalContext } from "../Context";
import { CheckoutPricing, ShippingInformation } from "../components";

const Checkout = () => {

  const {theme} = useGlobalContext();
  return (
 <section className="checkout-section">
  <h1 className="checkout-header"
  style={{color: theme && 'white'}}
  >place your order</h1>
  <div className="underline"></div>

  <div className="checkout-shipping-price-container">
    <ShippingInformation/>
    <CheckoutPricing/>
  </div>
 </section>
  )
}

export default Checkout;

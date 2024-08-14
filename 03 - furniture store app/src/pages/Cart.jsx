import { useEffect } from "react";
import { useGlobalContext } from "../Context";
import QuantityItemPrice from "./QuantityItemPrice";
import SingleQuantityItems from "./SingleQuantityItems";


const Cart = () => {

  const {setCart, cart, theme} = useGlobalContext()

  useEffect(() => {
  
  }, [cart.inputQuantity]);

  return (
   <section className="cart-section">
    <h1 className="cart-heading"
    style={{color: theme && 'white'}}
    >shopping cart</h1>
    <hr />

    <div className="cart-container">

      <div className="cart-items-container">
        {cart.map((items) => <SingleQuantityItems key={items.id} items = {items}/>)}
        
      </div>

      <div className="cart-price-container">
  
        <QuantityItemPrice />
      </div>

    </div>
   </section>
  )
}

export default Cart;

import { useGlobalContext } from "../Context";


const Cart = () => {

  const {setCart, cart} = useGlobalContext()

  

  return (
   <h1>Cart</h1>
  )
}

export default Cart;

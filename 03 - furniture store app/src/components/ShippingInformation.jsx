import { useState } from "react";
import { useGlobalContext } from "../Context";
import { toast } from "react-toastify";

const ShippingInformation = () => {
  const [isHover, setIsHOver] = useState(false)

  const {theme, placeOrderData, SetInputUserName, SetInputUserAddress, inputUserName, inputUserAddress, cart} = useGlobalContext()

  const onEnter = () => {
    setIsHOver(false)
  }

  const onLeave = () => {
    setIsHOver(true)
  }
  return (
    <>

    <div className="shipping-information-container">

      <h4 className="shipping-para"
      style={{color: theme && 'white'}}
      >shipping information</h4>

      <div className="checkout-user-name">
        <p className="user-name">first name</p>
        <input 
        className="input-name" 
        type="text" 
        name="name"
        onChange={(e) => SetInputUserName(e.target.value)}
        />
      </div>

      <div className="checkout-user-address">
        <p className="user-address">address</p>
        <input 
        className="input-address" 
        type="text" 
        name="address"
        onChange={(e) => SetInputUserAddress(e.target.value)}
        />
      </div>

    <button 
    className="btn-shipping-checkout"
    onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() => {
        if ((inputUserName && inputUserAddress) && cart.length > 0) {
          placeOrderData()
          toast.success('Order Placed Successfully')
        } else {
          toast.error('This error is due to required fields not filled as well as product not selected')
        }
        return;
      }}
      style={{backgroundColor: (theme && isHover) && '#FF7AC6',
       color: theme && 'black',
       borderColor:(theme && isHover) && '#FF7AC6',
       transition: 'all 0.35s ease-in-out'}}

    >place your order</button>
    </div>

  </>
  )
}
export default ShippingInformation;
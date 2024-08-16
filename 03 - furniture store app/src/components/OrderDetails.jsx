import { useGlobalContext } from "../Context"
import { PaginationData } from "../pagination";

const OrderDetails = () => {

  const {placeOrder} = useGlobalContext();
 console.log(placeOrder);

 const page = 10;

 const data = PaginationData(page, placeOrder)
 
console.log(data);


  // const {date, price, productNameColor, quantity, userAddress, userName} = orders;
 
  if (data.length === 0) {
    return <div className="order-empty">Order is empty</div>
  }

  return (
    <>
    {
      data[0].map((product, index)  => <div className="single-order-products-shipping-details-container"
      key={index}
      >
      <div className="current-order-name">{product.userName}</div>
      <div className="current-order-address">{product.userAddress}</div>
      <div className="current-order-products">{product.quantity}</div>
      <div className="current-order-cost">${product.price}</div>
      <div className="current-order-date">{product.date}</div>
    </div>)
    }
    </>
   
  )
}
export default OrderDetails;
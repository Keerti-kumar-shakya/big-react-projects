import { useState } from "react";
import { useGlobalContext } from "../Context"
import { PaginationData } from "../pagination";

const OrderDetails = () => {

  const {theme} = useGlobalContext();

  const [count, setCount] = useState(0);
 console.log(count);
  const {placeOrder} = useGlobalContext();
 console.log(placeOrder);

 const page = 10;

 const data = PaginationData(page, placeOrder)
 
 console.log(data);


 const onClickHandle = (e) => {
 const data = parseInt(e.target.dataset.id);
 setCount(data)
 }


 const prevBtn = () => {
 
   if (count > 0) {
     setCount(prevCount => prevCount - 1)
   }
 }


const nextBtn = () => {

  if (data.length - 1 > count) {
    
    setCount(prevCount => prevCount + 1)
  }
}


  // const {date, price, productNameColor, quantity, userAddress, userName} = orders;
 
  if (data.length === 0) {
    return <div className="order-empty">Order is empty</div>
  }

  return (
    <>
    {
      data[count].map((product, index)  => <div className="single-order-products-shipping-details-container"
      key={index}
      >
      <div className="current-order-name" style={{color: theme && 'white'}}>{product.userName}</div>
      <div className="current-order-address" style={{color: theme && 'white'}}>{product.userAddress}</div>
      <div className="current-order-products" style={{color: theme && 'white'}}>{product.quantity}</div>
      <div className="current-order-cost" style={{color: theme && 'white'}}>${product.price}</div>
      <div className="current-order-date" style={{color: theme && 'white'}}>{product.date}</div>
    </div>)
    }

    <div className="order-btn-container">
      <button 
      className="order-btn-prev"
      onClick={prevBtn}
      >Prev</button> 
      {data.map((_, index) => <button 
      className= {`order-btn-index ${count === index?'active-order-btn-index' : ''}`}
       data-id = {index}
        onClick={(e) => onClickHandle(e)}
      key={index}>
        {index + 1}
        </button>)}
      <button 
      className="order-btn-next"
      onClick={nextBtn}
      >Next</button>
    </div>
    </>
   
  )
}
export default OrderDetails;
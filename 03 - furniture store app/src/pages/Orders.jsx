import { useGlobalContext } from "../Context";
import OrderDetails from "../components/OrderDetails";

const Orders = () => {

  const {theme, placeOrder} = useGlobalContext();


  return (
   <section className="order-section">
    <h1 
    className="order-heading" 
    style={{color: theme && 'lightcoral'}}>
      your orders
      </h1>
    <div className="order-underline"></div>
    <p className="order-total-quantity" style={{color: theme && 'lightcoral'}}>total orders: 
    <span className="total-orders" style={{color: theme && '#e3e6e9'}}> {placeOrder.length}</span></p>

    <div className="order-products-shipping-heading-container">
     <div className="order-name" style={{color: theme && 'lightcoral'}}>name</div>
     <div className="order-address" style={{color: theme && 'lightcoral'}}>address</div>
     <div className="order-products" style={{color: theme && 'lightcoral'}}>products</div>
     <div className="order-cost" style={{color: theme && 'lightcoral'}}>cost</div>
     <div className="order-date" style={{color: theme && 'lightcoral'}}>date</div>
    </div>

    <div className="order-underline"></div>
    
    <div className="order-products-shipping-details-container">
      <OrderDetails/>
    </div>

   </section>
  )
}

export default Orders

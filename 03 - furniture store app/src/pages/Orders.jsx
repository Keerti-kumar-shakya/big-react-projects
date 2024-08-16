import OrderDetails from "../components/OrderDetails"

const Orders = () => {
  return (
   <section className="order-section">
    <h1 className="order-heading">your orders</h1>
    <div className="order-underline"></div>
    <p className="order-total-quantity">total orders: 0</p>

    <div className="order-products-shipping-heading-container">
     <div className="order-name">name</div>
     <div className="order-address">address</div>
     <div className="order-products">products</div>
     <div className="order-cost">cost</div>
     <div className="order-date">date</div>
    </div>

    <div className="order-underline"></div>
    
    <div className="order-products-shipping-details-container">
      <OrderDetails/>
    </div>

   </section>
  )
}

export default Orders

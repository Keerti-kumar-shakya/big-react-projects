
import { useGlobalContext } from "../Context";
import { priceModifier } from "../utils/pricing";
import { toast } from "react-toastify";

  export const SingleQuantityItems = ({items}) => {

    let totalPrice = 0;

  
    const {cartRemove, onChangeHandle, cart, decreaseQuantity, theme} = useGlobalContext()

  console.log(items);
    const cartInputArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
    const {name, price, company, image, selectColor, inputQuantity
,id} = items;

 const totalIndividualPrice = price * inputQuantity;
totalPrice += totalIndividualPrice;

console.log(totalPrice);
    return (
      <div className="single-cart-items-container">
        <div className="cart-image-details-container">
         <img className="cart-image" src= {image} alt= {name} />

         <div className="cart-items-details">
          <div className="cart-name" style={{color: theme && 'white'}}>{name}</div>
          <div className="cart-company">{company}</div>
          <div className="cart-color" style={{color: theme && 'white'}}>color : <span className="cart-color-circle" style={{backgroundColor: selectColor}}></span></div>
         </div>
        </div>

        <div className="cart-amount-remove-price-container">

          <div className="cart-amount-remove-container">
            <div className="cart-amount-para" style={{color: theme && 'white'}}>amount</div>
            <select 
            className="cart-amount-input" 
            style={{backgroundColor: theme && 'rgba(0,0,0,0.3)', color: theme && 'white'}}
            value={inputQuantity}
            data-id = {id}
            onChange={(e) => {
              onChangeHandle(e)
              toast.success('Cart Updated');
              return;
            }}
            >
              {cartInputArray.map((number) => 
              <option 
            
              key={number} 
              value={number}
              >
                {number}
                </option>
                )}
            </select>
            <div 
            className="remove-btn"
            style={{color: theme && '#FF7AC6'}}
            data-id = {id}
            onClick={(e) => {

              if (inputQuantity > 1) {
                decreaseQuantity(e)
              }

              if (inputQuantity == 1) {
                cartRemove(e)               
              }
            }}
            >remove</div>
        </div>

          <div className="cart-price"
          style={{color: theme && 'white'}}
          >${priceModifier(totalIndividualPrice)}</div>
        </div>
        
      </div>
    )
  }
  export default SingleQuantityItems;
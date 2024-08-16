import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { initial_data } from "./data/initialData";
import { priceModifier } from "./utils/pricing";
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const url = `https://www.course-api.com/react-store-products`;


const AppContext = createContext();

export const AppProvider = ({children}) => {

  const [theme, useTheme] = useState(
    () => {
      const themeCart = localStorage.getItem('theme');
      return themeCart ? JSON.parse(themeCart) : false;}
  );
  const [axiosData, setAxiosData] = useState(initial_data)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    localStorage.setItem('theme', JSON.stringify(theme));
    
  }, [theme]);
  

  const request = async() => {
    setIsLoading(true)
    try {
      const response = await axios.get(url);
      const data = response.data;
      setIsLoading(false)
      setAxiosData(data)
    } catch (error) {
      console.log(error);
      toast.error('url not found')
    }
   }
  
   useEffect(() => {
   request()
   }, [])

// filter all
 const ProductFilter = axiosData.map((product) => product).flat();
 const [uniqueData, setUniqueData] = useState(null)
  const [search, useSearch] = useState();
  const [category, useCategory] = useState('all');
  const [company, useCompany] = useState('all');
  const [price, usePrice] = useState(0);
  const [shipping, useShipping] = useState(false);


  
  const handleSearch = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    const name = ProductFilter.filter((product) => product.name.toLowerCase().includes(data))
    useSearch(name)
    setUniqueData(name)
  }
  
  const handleCategory = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    const category = ProductFilter.filter((product) => {
      return product.category === data;
    })
    useCategory(data)
    setUniqueData(category)
  }
  
  const handleCompany = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    const company = ProductFilter.filter((product) => {
         
      return product.company === data;
    })
    useCompany(data)
    setUniqueData(company)
  }

  const handleRange = (e) => {
    //e.preventDefault()
    const data = parseInt(e.target.value);
 
    const range = ProductFilter.filter((product) => Math.ceil((product.price)/100) <= data)

    usePrice(data);
    setUniqueData(range)
  }
  
  const handleShipping = () => {
    //e.preventDefault()  
    const data = !shipping;
    useShipping(data)

    const shippingData = ProductFilter.filter((product) => {
      
      return product.shipping === data;
    })
    console.log(shippingData, data);
    setUniqueData(shippingData);  
  }

 const filterData = {company, category, search, shipping, price};

// click container data filter for single product display
const [cartData, setCartData] = useState(initial_data)
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});



console.log(cart);
const [selectColor, setSelectColor] = useState('');
const [inputQuantity, SetInputQuantity] = useState('');
console.log(selectColor, inputQuantity);
const singleProductData = (e) => {
  const data = e.currentTarget.dataset.id;
  const cartFilterData = axiosData.find((product) => product.id === data);
  setCartData([cartFilterData]);
}

const cartDisplay = () => {

  setCart(prevData => [...prevData, cartData.map(item => ({...item, selectColor, inputQuantity}))].flat());
}

const cartRemove = (e) => {
  const dataId = e.target.dataset.id;
  const remove = cart.filter((product) => product.id !== dataId);
  setCart(remove)
}

const decreaseQuantity = (e) => {
  const dataId = e.target.dataset.id;
  const remove = cart.map((product) => {

    if (product.id === dataId) {
      product.inputQuantity--;
    }
    return product;
  });

  setCart(remove)
}

const onChangeHandle = (e) => {
  const dataId = e.target.dataset.id;
  console.log(dataId);

  const updatedCart = cart.map((product) => {
    if (product.id === dataId) {
      product.inputQuantity = e.target.value;
    }
    return product;
  });
  setCart(updatedCart)
  
}

 // Save cart state to localStorage whenever it changes
 useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

// checkout place your order
const [placeOrder, setPlaceOrder] = useState(
  () => {
    const savedOrder = localStorage.getItem('placeOrder');
    return savedOrder ? JSON.parse(savedOrder) : [];
  }
);

const [inputUserName, SetInputUserName] = useState('');
const [inputUserAddress, SetInputUserAddress] = useState('');


const placeOrderData = () => {
let data = []

// quantity
const orderQuantity = cart.reduce((curr, items) => curr + parseInt(items.inputQuantity),0);

// quantity end

// price
let orderPrice = 0;

cart.map((product) => {
 return orderPrice += (parseInt(product.price) * parseInt(product.inputQuantity))
});
orderPrice = orderPrice + (orderPrice*10/100) + 500;

// price end

// product name color

const products = cart.map((product) => {
 return {product: product.name, color: product.selectColor}
})

// date

const date = day().format('hh:mm a - MMM Do, YYYY');


data.push({
  productsNameColor:products,
  quantity: orderQuantity,
  price: priceModifier(orderPrice),
  userName: inputUserName,
  userAddress: inputUserAddress,
  date: date
})

 setPlaceOrder(prevData => [...prevData, data].flat());
 setCart([]);
 SetInputUserName('');
 SetInputUserAddress('');
}

useEffect(() => {
  localStorage.setItem('placeOrder', JSON.stringify(placeOrder));
}, [placeOrder]);



  return(
    <AppContext.Provider value={{
      axiosData, theme, useTheme, handleSearch, search, handleCategory, handleCompany, handleShipping, 
      filterData, price, handleRange, isLoading, uniqueData, singleProductData, setSelectColor, selectColor, 
      SetInputQuantity, inputQuantity, cartData, cartDisplay, cart, setCart, cartRemove, onChangeHandle, decreaseQuantity, placeOrderData,SetInputUserName, SetInputUserAddress, placeOrder, inputUserName, inputUserAddress}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
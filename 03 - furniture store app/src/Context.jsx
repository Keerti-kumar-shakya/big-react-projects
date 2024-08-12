import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { initial_data } from "./data/initialData";


const url = `https://www.course-api.com/react-store-products`;


const AppContext = createContext();

export const AppProvider = ({children}) => {

  const [theme, useTheme] = useState(false);
  const [axiosData, setAxiosData] = useState(initial_data)
  const [isLoading, setIsLoading] = useState(false);

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


 // Save cart state to localStorage whenever it changes
 useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

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

  return(
    <AppContext.Provider value={{
      axiosData, theme, useTheme, handleSearch, search, handleCategory, handleCompany, handleShipping, 
    filterData, price, handleRange, isLoading, uniqueData, singleProductData, setSelectColor, selectColor, 
    SetInputQuantity, inputQuantity, cartData, cartDisplay, cart, setCart}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { initial_data } from "./data/initialData";


const url = `https://www.course-api.com/react-store-products`;


const AppContext = createContext();

export const AppProvider = ({children}) => {

  const [theme, useTheme] = useState(false);
  const [axiosData, setAxiosData] = useState(initial_data)
  const [singleProduct, useSingleProduct] = useState(initial_data);
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
  const [search, useSearch] = useState(null);
  const [category, useCategory] = useState('all');
  const [company, useCompany] = useState('all');
  const [price, usePrice] = useState(0);
  const [shipping, useShipping] = useState(false);


  
  const handleSearch = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    useSearch(data)
  }
  
  const handleCategory = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    useCategory(data)
  }
  
  const handleCompany = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    useCompany(data)
  }

  const handleRange = (e) => {
    //e.preventDefault()
    const data = e.target.value;
    usePrice(data)
  }
  
  const handleShipping = () => {
    //e.preventDefault()    
    useShipping(!shipping)
  }

  const filterData = {company, category, search, shipping, price};
 




 const singleProductHandle = (e) => {
  const data = e.currentTarget.dataset.link;
const dataFilter = axiosData.filter((product) => product.id === data);
useSingleProduct(dataFilter)

}

  return(
    <AppContext.Provider value={{
      axiosData, theme, useTheme, singleProductHandle, singleProduct, 
    handleSearch, search, handleCategory, handleCompany, handleShipping, 
    filterData, price, handleRange, isLoading}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { initial_data } from "./initialData";


const url = `https://www.course-api.com/react-store-products`;

const AppContext = createContext();

export const AppProvider = ({children}) => {
 const [theme, useTheme] = useState(false);
 const [axiosData, setAxiosData] = useState(null);
 const [singleProduct, useSingleProduct] = useState(initial_data);

 const request = async() => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    setAxiosData(data)
  } catch (error) {
    console.log(error);
    toast.error('url not found')
  }
 }

 useEffect(() => {
  request()
 }, [])

 const singleProductHandle = (e) => {
  const data = e.currentTarget.dataset.link;
const dataFilter = axiosData.filter((product) => product.id === data);
useSingleProduct(dataFilter)
}

  return(
    <AppContext.Provider value={{axiosData, theme, useTheme, singleProductHandle, singleProduct}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
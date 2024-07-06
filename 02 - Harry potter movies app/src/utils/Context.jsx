import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
const url = `https://potterapi-fedeperin.vercel.app/en/books`;
//const url2 = `https://stephen-king-api.onrender.com/api/books`;

export const AppProvider = ({children}) => {
const [passData , setPassData]  = useState(null);


  const fetchData = async () => {
  
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setPassData(data)
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return(
    <AppContext.Provider value={{passData}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
  return useContext(AppContext);
}
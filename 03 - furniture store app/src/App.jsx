import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./Context"


//pages
import { Cart, Checkout, Home, Orders, Products, Error, HomeLayout, SingleProduct, About } from "./pages";

// components
import { ErrorElement } from "./components";





const router = createBrowserRouter([
  
  {
    path: '/',
    element:<HomeLayout/>,
    errorElement: <Error/>,
    children: [
    {
      index: true,
      element: <Home/>,
      errorElement: <ErrorElement/>
    },
    {
      path: 'about',
      element: <About/>,
      errorElement: <ErrorElement/>
    },
    {
      path: 'products',
      element: <Products/>,
      errorElement: <ErrorElement/>
    },

    {
      path: `products/id`,
      element: <SingleProduct/>,
      errorElement: <ErrorElement/>, 
    },
    {
      path: 'cart',
      element: <Cart/>,
      errorElement: <ErrorElement/>
    },
    
    {
      path: 'checkout',
      element: <Checkout/>,
    },

    {path: 'orders',
     element: <Orders/>,
     errorElement: <ErrorElement/>
     }

    ]
  }
])


function App() {

// const {axiosData} = useGlobalContext()
// console.log(axiosData);




  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App

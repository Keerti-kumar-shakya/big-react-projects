import { useGlobalContext } from './utils/Context.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/*pages import*/
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";

/*components import*/
import Landing from "./components/Landing.jsx";

const router = createBrowserRouter([
  {
    path:  '/',
    element: <Home/>,
    children:[
      {
        index: true,
        element: <Landing/>
      },
      {
        path: 'favorite',
        element: <Favorite/>
      }
    ]
  }
])

function App() {
  const {passData} = useGlobalContext();
  console.log(passData);

  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App

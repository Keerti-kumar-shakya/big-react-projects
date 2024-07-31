import { Outlet, useNavigation } from "react-router-dom"
import { Loading, Navbar } from "../components";
import { useGlobalContext } from "../Context";

const HomeLayout = () => {
  const {theme} = useGlobalContext()
 const navigation = useNavigation();
 const isPageLoading = navigation.state === 'loading';

 document.body.style.backgroundColor = `${theme? 'rgb(80, 80, 80)' : 'white'}`

 const color = theme? 'white' : 'black';

  return (
    <>
      <Navbar/>
      <main className="home-layout-container" style={{transition: '0.5s', color: color}}>
      
      {isPageLoading?
      <Loading/> : <Outlet/> // outlet means Home page
      }
    </main>
    </>
  )
}

export default HomeLayout;

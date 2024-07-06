import { NavLink } from "react-router-dom"
import { IoMoonOutline, IoSunnyOutline, IoCartOutline   } from "react-icons/io5";

import { useGlobalContext } from "../Context";


const Navbar = () => {

  const {theme, useTheme} = useGlobalContext();

  const putColor = theme? 'rgb(30, 30, 30)' : 'rgb( 220, 220, 220)';
  

  return (
   <nav className="navbar-section" style={{backgroundColor: putColor}}>
    <div className="navbar">

    <span className="logo">F</span>

    <article className= {`nav-links ${theme && 'color'}`} >
      <NavLink className= 'link' to= '/'>
        Home
      </NavLink>

      <NavLink className= 'link' to= 'products'>
        Products
      </NavLink>

      <NavLink className= 'link' to= 'cart'>
        Cart
      </NavLink>

      <NavLink className= 'link' to= 'checkout'>
        Checkout
      </NavLink>

      <NavLink className= 'link' to= 'orders'>
        Orders
      </NavLink>

    </article>

     <article className="theme-cart-logo-container">
      <button className="theme-changer" onClick={() => useTheme(!theme)}>
        {theme? <IoMoonOutline/> : <IoSunnyOutline/>}
      </button>
      
      <div className="cart" style={{color: theme? 'white': 'black'}}>
        <IoCartOutline/>
        <div className="total-number-product">
          0
        </div>
      </div>
     </article>
    </div>
   </nav>
  )
}

export default Navbar

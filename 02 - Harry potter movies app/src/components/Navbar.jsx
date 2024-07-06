import { GiMagicBroom } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-slate-600 px-20 py-4 flex justify-between gap-x-2 items-center">
      <GiMagicBroom className="text-7xl text-yellow-300"/>
      <div className="nav-heading capitalize text-4xl text-violet-50" >harry potter movies list</div>  
      <div className="nav-links flex gap-x-3">
        <NavLink to= '/' className='text-2xl capitalize font-serif'>
          home
        </NavLink>
        <NavLink to= 'favorite' className='text-2xl capitalize font-serif'>
          favorite 
        </NavLink>

      </div>  
    </nav>
  )
}

export default Navbar


import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const value = 'page not found'
  return (
    <>
    <Navbar/>
    <main className='text-3xl uppercase mx-96 border-2 border-solid border-black '>
      homes
      <Outlet context={{ value }} />
    </main>
    </>
  )
}

export default Home;

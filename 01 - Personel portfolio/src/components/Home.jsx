import { links } from "../../data"

const Home = () => {

  
  return (
    <nav className="home-section" id="home">
      <div className="navbar-container">
     <h1 className="header-container">
      Web<span className="header-span-dev-par">Dev</span>
     </h1>
      <ul className="link-container">
      {links.map((link) => {
        return <a className="links" href= {link.href} key = {link.id}>{link.text}</a>
      })}
      </ul>
      </div>
    </nav>
  )
}

export default Home

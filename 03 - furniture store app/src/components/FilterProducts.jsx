import { Form, Link } from "react-router-dom"
import { useGlobalContext } from "../Context"


const FilterProducts = ({filter}) => {

  const step = 10;
  const maxPrice = 3000;
  
  const {axiosData, handleSearch, handleCategory, handleCompany, handleShipping, filterAllData, price, handleRange} = useGlobalContext();
  
  const productCategory = ['all', ...new Set(axiosData.map((product) => product.category))];
  
  const productCompany = ['all', ...new Set(axiosData.map((product) => product.company))];
 
  return (
    <div className="filter-input-container" >
      {/* search product */}
      <div className="search-input">
        <p className="search-heading">search product</p>
        <input 
        className="text-input" 
        type="search" 
        name="search"
        onChange={handleSearch}
        />
      </div>

       {/* select Category */}
       <div className="search-input">
        <p className="search-heading">search category</p>
        <select className="select-input"
        defaultValue= ''
        onChange={handleCategory}
        >
          {productCategory.map((product) => <option 
          key={product}        
          >
            {product}
            </option>
            )}
        </select>
      </div>
     
       {/* select company */}
       <div className="search-input">
        <p className="search-heading">search company</p>
        <select className="select-input"
        onChange={handleCompany}
        >
          {productCompany.map((product) => <option key={product}>{product}</option>)}
        </select>
      </div>

       {/* input range */}
       <div className="search-input">
        <p className="search-heading">search product</p>

        <div className="selecting-range">
          <p className="select-para">Select Price</p>  
          <p className="show-range">${price}</p>  
        </div>

        <input className="range-input" 
        type="range" 
        min={0}
        max={maxPrice}
        step={step}
        onChange={handleRange}
        />
        <div className="range-para">
          <p className="range-min">0</p>
          <p className="range-max">$3000.00</p>
        </div>
      </div>

      {/* input shipping */}
      <div className="search-input shipping-input">
        <p className="search-heading">Free shipping</p>
        <input className="checkbox-input" 
        type="checkbox" 
        name="checkbox" 
        onClick={handleShipping}
        />
      </div>

      <button className="search-btn"
      onClick={filter}
      >search</button>
      <Link to = '/products' className = "reset-btn"
       onClick={() => location.reload()}
      >
          reset
      </Link>
    </div>
  )
}

export default FilterProducts;

import { Form, Link } from "react-router-dom"
import { useGlobalContext } from "../Context"


const FilterProducts = ({filter}) => {

  const step = 1000;
  const maxPrice = 100000;
  
  const {axiosData, handleSearch, handleCategory, handleCompany, handleShipping, filterAllData} = useGlobalContext();
  
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
        <input className="range-input" type="range" name="" id="" />
      </div>

      {/* input shipping */}
      <div className="search-input shipping-input">
        <p className="search-heading">Free shipping</p>
        <input className="checkbox-input" 
        type="checkbox" 
        name="checkbox" 
        min={0}
        max={maxPrice}
        step={step}
        onClick={handleShipping}
        />
      </div>

      <button className="search-btn"
      onClick={filter}
      >search</button>
      <Link to = '/products' className = "reset-btn">
          reset
      </Link>
    </div>
  )
}

export default FilterProducts

import { FilterProducts, ProductsContainer } from "../components"
import { PaginationData } from "../pagination";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const Products = () => {

  const {axiosData, filterData, isLoading, uniqueData, price} = useGlobalContext();
  console.log(uniqueData);
  const [productFilterData, useProductFilterData] = useState();
  const [count, setCount] = useState(0);
 
    const pages = 6;
    const data = PaginationData(pages, axiosData)
    const showData = productFilterData? [ productFilterData ] : data;
    const ProductFilter = axiosData.map((product) => product).flat();

    console.log(productFilterData);
    //console.log(showData);

    const filterAllData = () => {
      useProductFilterData(uniqueData)
    
    //console.log(search);
      // const filterDataFinal = axiosData.filter((product) => product.company === filterData.company)

        
    // const filteredProducts = ProductFilter.filter(product => {
                 
    //        return (  product.category === filterData.category &&
    //           product.company === filterData.company &&
    //           product.shipping === filterData.shipping
    //           )
            
    //   });

    //   if (filteredProducts.length == 0) return;

    //   console.log(filteredProducts);
    //   useProductFilterData(filteredProducts)

    //   if (filteredProducts.length === 0) {
    //  const filterData2 = ProductFilter.filter((product) => {
    //       return  product.category === filterData.category &&
    //       product.company === filterData.company 
    //     })
    //     useProductFilterData(filterData2);
    //   }


     }

      // increase or decrease paginate

 const increase = () => {
  if (data.length -1 > count) {
    setCount(prevCount => prevCount + 1)
  }
 }

 const decrease = () => {
  if (count > 0) {
    setCount(prevCount => prevCount - 1)
  }
 }

 const matchCountNumber = (e) => {
 const data = parseInt(e.target.dataset.id);
 setCount(data)
 }



  
    if (isLoading) {
      return <section>
        <h1>Loading...</h1>
      </section>
    }

  return (
  <section className='section-products'>

    <article className='filter-products'>
           <FilterProducts 
           filter = {filterAllData}  
           data = {data}
          
           />
    </article>

    <article className="company-products-details">
          <ProductsContainer 
          showData = {showData}
          count = {count}
          />
    </article>


    <article className="all-btn-pagination">   
      {showData.length > 1  && <button 
      className="prev-btn"
      onClick={() => decrease()}
      >prev
      </button>}
       {showData.length > 1 && showData.map((_, index) => 
       <button 
       key={index} 
       className= {`btn-number ${count === index? 'hight-light-btn' : ''}`}
       data-id = {index}
       onClick={(e) => matchCountNumber(e)}
       >{showData.length > 1 && index + 1}
       </button>)}
      {showData.length > 1 && <button 
      className="next-btn"
      onClick={() => increase()}
      >next
      </button>}
    </article>

  </section>
  )
}

export default Products

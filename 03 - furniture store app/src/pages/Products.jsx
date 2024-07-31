import { FilterProducts, ProductsContainer } from "../components"
import { PaginationData } from "../pagination";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const Products = () => {
  const {axiosData, filterData, isLoading, search} = useGlobalContext();
    const pages = 6;
    const data = PaginationData(pages)
    const [productFilterData, useProductFilterData] = useState();
    const showData = productFilterData? [productFilterData] : data;
    const ProductFilter = axiosData.map((product) => product).flat();

    const filterAllData = () => {
    
      // const filterDataFinal = axiosData.filter((product) => product.company === filterData.company)
 //useProductFilterData(filterDataFinal)
 console.log(productFilterData);
      console.log(axiosData);
      const filteredProducts = ProductFilter.filter(product => {
        return (
            product.category === filterData.category &&
            product.company === filterData.company &&
            product.shipping === filterData.shipping
        );
    });
      //console.log(filteredProducts);
      useProductFilterData(filteredProducts)

     //category
      if (filteredProducts.length === 0) {
        const category = ProductFilter.filter((product) => {
          return product.category === filterData.category
        })
        useProductFilterData(category);
      }

     //company
      if (filteredProducts.length === 0) {
        const company = ProductFilter.filter((product) => {
          return product.company === filterData.company
        })
        useProductFilterData(company);
      }

       //search name
       if (filteredProducts.length === 0) {
        const name = ProductFilter.filter((product) => product.name.toLowerCase().includes(search))
        useProductFilterData(name);
      }

        //shipping
        if (filteredProducts.length === 0) {
          const shipping = ProductFilter.filter((product) => {
            return product.shipping === filterData.shipping
          })
          useProductFilterData(shipping);
        }
     
     }
  
    if (isLoading) {
      return <section>
        <h1>Loading...</h1>
      </section>
    }

  return (
  <section className='section-products'>

    <article className='filter-products'>
           <FilterProducts filter = {filterAllData}  data = {data}/>
    </article>

    <article className="company-products-details">
          <ProductsContainer showData = {showData}/>
    </article>


    <article className="all-btn-pagination">   
      {showData.length > 1  &&<button className="prev-btn">prev</button>}
       {showData.length > 1 && showData.map((_, index) => 
       <button key={index} className="btn-number">{showData.length > 1 && index + 1}</button>)}
      {showData.length > 1 && <button className="next-btn">next</button>}
    </article>

  </section>
  )
}

export default Products

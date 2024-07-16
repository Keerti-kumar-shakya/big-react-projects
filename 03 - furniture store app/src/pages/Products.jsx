import { FilterProducts, ProductsContainer } from "../components"
import { PaginationData } from "../pagination";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const Products = () => {
  const pages = 6;
  const data = PaginationData(pages)

    const [productFilterData, useProductFilterData] = useState(null);
   //console.log(productFilterData);
    const showData = productFilterData? [productFilterData] : data;

    const [showProduct, useShowProduct] = useState(showData);
    const {axiosData, filterData} = useGlobalContext();
   console.log(filterData);
   console.log(showData);
   

    const filterAllData = () => {
    
      // const filterDataFinal = axiosData.filter((product) => product.company === filterData.company)
      // useProductFilterData(filterDataFinal)

     axiosData.filter((product) => {

      if (product.category === filterData.category) {
        if (product.company === filterData.company) {
         if (product.shipping === filterData.shipping) {
          useProductFilterData(product)
         }
        }
      }

     })

     }
  
    

  return (
  <section className='section-products'>

    <article className='filter-products'>
           <FilterProducts filter = {filterAllData}/>
    </article>

    <article className="company-products-details">
          <ProductsContainer showProduct = {showProduct}/>
    </article>

  </section>
  )
}

export default Products

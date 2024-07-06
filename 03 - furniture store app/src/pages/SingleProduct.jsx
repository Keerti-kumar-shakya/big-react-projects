import { useGlobalContext } from "../Context";

const SingleProduct = () => {
 const {singleProduct} = useGlobalContext();

 const {id,category, color, company, description, image, name, price, shipping} = singleProduct[0];

 console.log(image, id);
  return (
   <section className="single-product-container">   

   </section>
  )
}

export default SingleProduct;

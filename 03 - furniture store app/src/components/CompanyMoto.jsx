import { useGlobalContext } from "../Context";

const image = [
  {
  img: 'https://www.course-api.com/images/store/product-1.jpeg'
},
{
  img: 'https://www.course-api.com/images/store/product-3.jpeg'
},
{
  img: 'https://www.course-api.com/images/store/product-4.jpeg'
}
]

const CompanyMoto = () => {

  const {theme} = useGlobalContext();
  return (
   <article className="motto-company-container">
  <div className="motto-inner">
    <h1 className="motto" style={{color: theme && 'whitesmoke'}}>Crafting Elegance, One Piece at a Time</h1>

    <p className="description" style={{color: theme && 'white'}}>
    Transform your living space with our sleek and sophisticated furniture designs. Each piece is crafted to bring a touch of elegance and modernity to your home, ensuring style and functionality.
    </p>
  </div>

  <div className="product-sample" style={{backgroundColor: theme && 'rgba(255, 255, 255, 0.3)'}}>
    {image.map((data, index) => <img 
    className="img-sample-product" 
    src ={data.img}
    key={index}
    />)}
  </div>
   </article>
  )
}

export default CompanyMoto;

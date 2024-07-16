import { useGlobalContext } from "../Context"


const About = () => {

  const {theme} = useGlobalContext()
  return (
    <section className="about-section">
      <h1 className="about-title">Elegant Home Furniture Store -
      <span style={{color: theme&& 'lightpink'}}>Stylish and Affordable Furniture Online</span></h1>

      <p className="about-description" style={{color: theme&& 'white'}}>
      Welcome to Elegant Home Furniture Store, your one-stop destination for stylish and affordable furniture. Discover a wide range of high-quality furniture pieces, from cozy living room sets and functional office desks to chic dining tables and comfortable bedroom suites. Our curated collection combines modern design with timeless elegance to transform your home into a sanctuary of comfort and style. Shop now and enjoy exclusive discounts, fast shipping, and excellent customer service.
      </p>

  
    </section>
  )
}

export default About;

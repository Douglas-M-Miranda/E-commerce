import { useParams, Link } from "react-router-dom";
import './ProductDetails.css'

function ProductDetails({data}) {
    const { id } = useParams()

    if (!data.length) {
    return <p>Loading...</p>;
  }

  const product = data.find((p) => p.id === Number(id));
  
  if (!product) {
      return (
        <>
        <Link to={'/products'}><span>Return</span></Link>
        <p className="error">Product not found...</p>
        </>
    )     
  }

    return(
    <div className="details">
        <Link to={'/products'}><span>Return</span></Link>
        <h1>{product.title}</h1>
        <img src={product.image} alt={`picture of ${product.title}`} />
        <p>{product.description}</p>
    </div>
    );
}

export default ProductDetails;
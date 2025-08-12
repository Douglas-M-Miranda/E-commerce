import ProductCard from '../component/ProductCard'
import './product.css'

function Product({data}) {
    return(
        <div>
            <section className="productCards">
                {data.map((d) => (
                    <ProductCard key={d.id} d={d}/>
                ))}
            </section>
        </div>
    );
}

export default Product;
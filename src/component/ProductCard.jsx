import { Link } from 'react-router-dom'
function ProductCard({d}) {
    return (
        <article key={d.id} className="containerCard">
            <div className="cardImage">
                <img src={d.image} alt={`picture of ${d.title}`} />
            </div>

            <div className='cardDescrition'>
                <h2>{d.title}</h2>

                <p>{d.description}</p>

                <div className='cardPriceButton'>
                    <p>{`R$ ${d.price}`}</p>

                    <Link to={`/products/${d.id}`}>
                        <button>view details</button>
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
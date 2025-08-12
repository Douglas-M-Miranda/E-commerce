import draw from '../assets/undrawshopping.svg'
import { Link } from 'react-router-dom';
import './home.css'

function Home({ data }) {

    return (
        <main className='mainHome'>
            <section className='containerIntroduction'>
                <article className="aboutPage">
                    <p>Welcome to my e-commerce project using the FakeStoreAPI. This project was developed with the goal of learning key concepts such as API integration with Axios and multi-page routing using React Router DOM.</p>
                </article>
                <div className="drawing">
                    <img src={draw} alt="drawing of a woman shopping" />
                </div>
            </section>

            <div className='divSeeMore'>
                <Link className='SeeMore' to={'/products'}>
                    See more
                </Link>
            </div>

            <ul>
            </ul>
            <section className='containerProduct'>
                <article className='productsItems'>
                    <ul>
                        {data.filter((f) => f.category === "electronics").map((d) => (
                            <li><img src={d.image} alt="" /></li>
                        ))}

                    </ul>
                </article>
                <article className='productsItems'>
                    <ul>
                        {data.filter((f) => f.category === "women's clothing").map((d) => (
                            <li><img src={d.image} /></li>
                        ))}
                    </ul>
                </article>
                <article className='productsItems'>
                    <ul>
                        {data.filter((f) => f.category === "men's clothing").map((d) => (
                            <li><img src={d.image} /></li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}

export default Home;
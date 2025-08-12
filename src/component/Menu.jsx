import { Link } from "react-router-dom";

function Menu() {

    return(
        <nav className="containerMenu">
            <h2><Link className="menuLogo" to="/">E-commerce</Link></h2>

            <ul className="MenuItems">
                <li><Link className="itemLink" to="/">Home</Link></li>
                <li><Link className="itemLink" to="/products">Products</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
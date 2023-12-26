import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){

    return (
        <>
        <div className="nav">
            <div className="nav-flex">
                <ul>
                    <li><span>Home</span></li>
                    <li><span>Prods</span></li>
                    <li><span>About</span></li>
                </ul>
            </div>
            <CartWidget></CartWidget>
        </div>


    </>
    )

}

export default NavBar
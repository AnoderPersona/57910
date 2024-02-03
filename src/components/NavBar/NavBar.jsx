import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';

function NavBar(){

    return (
        <>
        <div className="nav">
            <Link to={`/`} ><Logo></Logo></Link>

                <div className="nav-flex">
                    <h4>
                        <ul>
                            <NavLink to={`/tag/captura`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li><span>Captura</span></li></NavLink>
                            <NavLink to={`/tag/curacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li><span>Curación</span></li></NavLink>
                            <NavLink to={`/tag/ataque`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li><span>Ataque</span></li></NavLink>
                            <NavLink to={`/tag/evolucion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li><span>Evolución</span></li></NavLink>
                            <NavLink to={`/tag/entrenamiento`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><li><span>Entrenamiento</span></li></NavLink>
                        </ul>
                    </h4>
                </div>
            
            <CartWidget></CartWidget>
        </div>


    </>
    )

}

export default NavBar
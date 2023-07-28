import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="Categories">
                <Link to="/" className="titulo__NavBar"><h3>Compu Ventas</h3></Link>
                <NavLink to={`/category/notebooks`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Notebooks</NavLink>
                <NavLink to={`/category/gabinetes`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Gabinetes</NavLink>
                <NavLink to={`/category/perifericos`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Perifericos</NavLink>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar
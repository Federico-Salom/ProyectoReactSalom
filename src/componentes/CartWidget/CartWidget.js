import "./CartWidget.css"
import cart3 from './assets/cart3.svg'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    const totalQuantity = cart.reduce((acum, item) => acum + item.quantity, 0);

    return (
        <Link to="cart" id="cartWidget" style={{ display: totalQuantity > 0 ? "flex" : "none"}}>
            <img src={cart3} alt="cart-widget" className='Carrito'/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget
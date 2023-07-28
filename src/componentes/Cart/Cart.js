import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const { cart, clearCart} = useContext(CartContext)

    if(cart.length === 0) {
        
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Button variant="success"><Link to="/" className="OptionLink">Productos</Link></Button>
                
            </div>
        )
    }

    return (
        <div className="cartContainer">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className="buttonContainer">
            <Button onClick={() => clearCart()} variant="danger">Limpiar carrito</Button>
            <Link to="/checkout"><Button variant="primary">Chekout</Button></Link>
            </div>
        </div>
    )
}

export default Cart;
import "./CartWidget.css"
import cart3 from './assets/cart3.svg'

const CartWidget = () => {
    return (
        <div className='div__main__carrito'>
        <div className='div__carrito'>
            <img src={cart3} alt="cart-widget" className='Carrito'/>
        </div>
            <h3>0</h3>
        </div>
    )
}

export default CartWidget
import "./CartItem.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';

    const CartItem = ({ id, name, img, price, quantity, description}) => {
        const {removeItem} = useContext(CartContext)
        const subTotal = price*quantity; 
        const removeProduct = () =>{
            removeItem(id)
        };

        return (
            <div className="CartItem" >
                <h3 className="tituloCarrito">{name}</h3> 
                <p>Descripcion del producto: {description}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio: ${price}</p>
                <p>Total: ${subTotal}</p>
                <picture>
                <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <Button variant="danger" onClick={() => removeProduct(id)}>Eliminar</Button>
            </div>
        )
    }


export default CartItem;
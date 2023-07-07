import { Button, Stack } from "react-bootstrap"
import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <Stack direction="horizontal"className="Controls mx-auto">
                <Button variant="success" onClick={decrement}>-</Button>
                <h4 className="Number">{quantity}</h4>
                <Button variant="success" onClick={increment}>+</Button>
            </Stack>
            <Stack className="button__agregar" direction="horizontal">
                <Button variant="success" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </Stack>
        </div>
    )
}

export default ItemCount;
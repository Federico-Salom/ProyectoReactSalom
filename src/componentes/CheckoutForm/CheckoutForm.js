import { Button } from "react-bootstrap"
import "./CheckoutForm.css"
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm} className="formCheckout">
                <label>
                    <h3>Nombre</h3>
                    <input type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label>
                    <h3>Telefono</h3>
                    <input type="number" value={phone} onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label>
                    <h3>Email</h3>
                    <input type="email" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <Button className="buttonCheckout" type="submit">Confirmar</Button>
            </form>
        </div>
    )
}

export default CheckoutForm;
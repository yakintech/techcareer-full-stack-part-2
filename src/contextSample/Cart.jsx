import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {

    const { cart, setcart } = useContext(CartContext);

    const totalPriceCal = () => {
        let total = 0;

        cart.forEach(element => {
            total = total + (element.quantity * element.unitPrice);
        });
        var totalPrice = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(total)
        return totalPrice;
    }

    const emptyCart = () => {
        setcart([]);
    }

    const removeItem = (id) => {

        let cartItems = cart.filter(q => q.id != id);
        setcart([...cartItems]);

    }

    return (<>
        <h1>Total Price: {totalPriceCal()} </h1>
        <button onClick={() => emptyCart()}>Empty Cart</button>
        {
            cart && cart.map((item) => {
                return <div style={{ display: 'flex' }}>
                    <li>
                        {item.name} / {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}
                    </li>
                    <button onClick={() => removeItem(item.id)}>Remove Item</button>
                </div>

            })
        }
    </>
    )
}

export default Cart
import React, { useState } from 'react';

const initialCart = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 49.99,
        quantity: 2,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        quantity: 1,
    },
];

const Kart = () => {
    const [cart, setCart] = useState(initialCart);

    const handleQuantityChange = (id, delta) => {
        const updatedCart = cart.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        );
        setCart(updatedCart);
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={styles.cart}>
            <h1 style={styles.header}>Shopping Cart</h1>
            <div style={styles.cartItems}>
                {cart.map(item => (
                    <div key={item.id} style={styles.cartItem}>
                        <div style={styles.itemDetails}>
                            <h2 style={styles.itemName}>{item.name}</h2>
                            <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
                            <div style={styles.quantityControls}>
                                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                <span style={styles.quantity}>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            </div>
                        </div>
                        <button style={styles.removeButton} onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div style={styles.total}>
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
        </div>
    );
};

const styles = {
    cart: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    cartItems: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cartItem: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    itemDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    itemName: {
        fontSize: '18px',
        margin: '10px 0',
    },
    itemPrice: {
        fontSize: '16px',
        color: '#000',
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
    },
    quantity: {
        margin: '0 10px',
    },
    removeButton: {
        backgroundColor: '#ff0000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
    total: {
        marginTop: '20px',
        textAlign: 'center',
    },
};

export default Kart;

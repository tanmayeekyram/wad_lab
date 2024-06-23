import React from 'react';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is a description of product 1.',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is a description of product 2.',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is a description of product 3.',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'This is a description of product 4.',
        price: 99.99,
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const Cat = () => {
    return (
        <div style={styles.catalogue}>
            <h1 style={styles.header}>Product Catalogue</h1>
            <div style={styles.productList}>
                {products.map(product => (
                    <div key={product.id} style={styles.productCard}>
                        <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
                        <h2 style={styles.productName}>{product.name}</h2>
                        <p style={styles.productDescription}>{product.description}</p>
                        <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    catalogue: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    productList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    productCard: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
    },
    productImage: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
    },
    productName: {
        fontSize: '18px',
        margin: '10px 0',
    },
    productDescription: {
        fontSize: '14px',
        color: '#555',
    },
    productPrice: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000',
    },
};

export default Cat;

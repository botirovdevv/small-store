import React, { useEffect, useState } from 'react'
// import Backet from '../../pages/Backet'
import axios from 'axios'
import { Button, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function Products() {

    const [cartItems, setCartItems] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data)
            setLoading(false)
        })
    }, [])

    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId)

        if (productToAdd) {
            setCartItems((prevItems) => {
                const duplicateCount = prevItems.filter((item) => item.id === productId).length;

                if (duplicateCount >= 1) {
                    return prevItems.map(item => {
                        if (item.id === productId) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    });
                } else {
                    return [...prevItems, { ...productToAdd, quantity: 1 }];
                }
            });
        }
    }

    const removeToCart = (productId) => {
        setCartItems((prevItems) => {
            const duplicateCount = prevItems.filter((item) => item.id === productId).length;

                if (duplicateCount >= 1) {
                    return prevItems.map(item => {
                        if (item.id === productId) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });
                } else {
                    return [...prevItems, { ...productToAdd, quantity: 1 }];
                }
        })
    }

    const clearAll = () => {
        setCartItems([])
    }

    return (
        <div>
            {
                loading ?

                    <div className="products-loader">
                        <h1>Loading</h1>
                    </div>

                    :
                    <section className="products">
                        <div className="container">
                            <div className="products-cards">
                                {products.map((item, key) => (
                                    <div className="backet-card" key={item.id}>
                                        <div className="products-image">
                                            <img src={item.image} className='products-img' alt="" />
                                        </div>
                                        <h1 className='products-name'>{item.title.substring(0, 10)}...</h1>
                                        <h2 className='products-desc'>{item.category}</h2>
                                        <h2 className='products-price'>{item.price}$</h2>
                                        <Button variant="contained" className='products-btn' onClick={() => addToCart(item.id)}>Add to card</Button>
                                    </div>
                                ))}
                            </div>
                            <div className="backet">
                                <h1 className='backet-title'>Backet</h1>
                                <div className='backet-buttons'>
                                    <Button variant="contained" onClick={clearAll}>Clear all</Button>
                                    <Button variant="contained">Total cards: {cartItems.length}</Button>
                                </div>
                                <div className="backet-cards">
                                    {cartItems.map((item) => (
                                        <div className="products-card" key={item.id}>
                                            <div className="products-image">
                                                <img src={item.image} className='products-img' alt="" />
                                            </div>
                                            <h2 className='products-desc'>{item.category}</h2>
                                            <h2 className='products-price'>{item.price}$</h2>
                                            <h1>{item.quantity} ta mahsulot</h1>
                                            <Button variant="outlined" className='basket-delete' color='error' onClick={() => removeToCart(item.id)} startIcon={<DeleteIcon />}>
                                                Delete
                                            </Button>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </section>
            }
        </div>
    )
}

export default Products
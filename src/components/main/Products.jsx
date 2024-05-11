import React, { useEffect, useState } from 'react'
import Backet from '../../pages/Backet'
import axios from 'axios'

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
            setCartItems((prevItems) => [...prevItems, productToAdd])
        }
        console.log(cartItems);
    }

    const removeToCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    }

    return (
        <div>
            {
                loading ?

                    <h1>Loading</h1>

                    :
                    <section className="products">
                        <div className="container">
                            <div className="products-cards">
                                {products.map((item, key) => (
                                    <div className="products-card" key={item.id}>
                                        <div className="products-image">
                                            <img src={item.image} className='products-img' alt="" />
                                        </div>
                                        {/* <h1 className='products-name'>{item.title}</h1> */}
                                        <h2 className='products-desc'>{item.category}</h2>
                                        <h2 className='products-price'>{item.price}</h2>
                                        <button className='products-btn' onClick={() => addToCart(item.id)}>Add to cart</button>
                                    </div>
                                ))}
                            </div>
                            <div className="backet">
                                <div>
                                    <h1>backet</h1>
                                    <h1>Total cards: {cartItems.length}</h1>
                                </div>
                                <div className="products-cards">
                                    {cartItems.map((item) => {
                                        return (
                                            <div className="products-card">
                                                <div className="products-image">
                                                    <img src={item.image} className='products-img' alt="" />
                                                </div>
                                                <h2 className='products-desc'>{item.category}</h2>
                                                <h2 className='products-price'>{item.price}</h2>
                                                <button className='products-btn' onClick={() => removeToCart(item.id)}>Remove to card</button>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </section>
            }
        </div>
    )
}

export default Products
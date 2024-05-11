import React from 'react'

function Backet({ cartItems }) {
    console.log(cartItems);
    return (
        <div className='products-cards'>
            {/* {cartItems.map((item) => {
                return (
                    <div className="products-card">
                        <div className="products-image">
                            <img src={item.img} className='products-img' alt="" />
                        </div>
                        <h1 className='products-name'>{item.name}</h1>
                        <h2 className='products-desc'>{item.desc}</h2>
                        <h2 className='products-price'>{item.price}</h2>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Backet
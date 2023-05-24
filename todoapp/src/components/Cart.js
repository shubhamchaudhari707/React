import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const img1 = "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

    const img2 = "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Cart = () => {
    return (
        <div className='cart'>
            <main>
                <CartItem
                    imgsrc={img1}
                    name={"Mac Book"}
                    price= {212121}
                    qty={1}
                    id="skhj"
                />
            </main>

            <aside>
                <h2>SubTotal : $ {2000} </h2>
                <h2>shipping : $ {2000} </h2>
                <h2>Tax : $ {2000} </h2>
                <h2>Total : $ {2000} </h2>
            </aside>
        </div>
    )
}

const CartItem = ({ imgsrc, name, price, qty, handler, increment, decrement, deleteHandler, id }) => (
    <div className="cartItem">
        <img src={imgsrc} alt="" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>

        </article>

        <div>
            <button onClick={() => increment(id)}>-</button>
            <p style={{color:'black'}}>{qty}</p>
            <button onClick={() => decrement(id)}>+</button>
        </div>

        <AiFillDelete onClick={deleteHandler} style={{color:"black"}}/>
    </div>
)

export default Cart
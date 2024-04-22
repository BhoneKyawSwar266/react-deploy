import React, { useContext, useState } from 'react';
import '../CardItems/Carditem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const Carditem = () => {
    const { all_product, cartItems, removeCart ,getTotalCartAmount} = useContext(ShopContext);
    const [showPopup, setShowPopup] = useState(false);

    const handleCheckout = () => {
        setShowPopup(true);
        // Add any additional logic you need when the checkout button is clicked
    };

    return (
        <div className='cartitems'>
            <div className='catitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            <div>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div className='cartitems-format catitems-format-main' key={e.id}>
                                <img src={e.image} alt="" className='carticon-produt-icon' />
                                <p className='carticon-produt-name'>{e.name}</p>
                                <p>{e.new_price} MMK</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]} MMk</p>
                                <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={() => { removeCart(e.id) }} />
                            </div>
                        );
                    }
                    return null; // Add this line to satisfy ESLint
                })}
            </div>
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()} MMK</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Totals</h3>
                            <h2>{getTotalCartAmount()} MMK</h2>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                        <p>This service isn't available right now, please try again later</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carditem;

import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
const Orders = () => {
    const navigate = useNavigate()
    const [products] = useProducts()
    const[cart, setCart] = useCart(products)
    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct} ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='proceed-btn' onClick={()=>navigate('/shipment')}><span>
                    Proceed shipping</span> <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
import React from 'react';
import { useState,useEffect } from 'react';
import { getDatabaseCart,processOrder,removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';
const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace,setOrderPlace] = useState(false)
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)
        const cardProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = saveCart[key]
            return product
        });
        setCart(cardProducts)
    },[])
    const removeItems = (productKey) =>{
        const newCart = cart.filter(pd=> pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    const history = useHistory()
    const handleProceedCheckout = () =>{
        // console.log('place-order')
        // setCart([])
        // setOrderPlace(true)
        // processOrder()
        history.push('/shipment')
    }
    let thankYou;
    if(orderPlace){
       thankYou =  <img src={happyImage} alt=""/>
    }
    return (
        <div className='twin-container'>
           <div className='product-container'>
                {
                    cart.map(pd=> <ReviewItems key={pd.key} removeItems={removeItems} product={pd}></ReviewItems>)
                }
            </div>
            {thankYou}
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className='cart-button'>Proceed CheckOut</button>
                </Cart>
            </div>  
        </div>
    );
};

export default Review;
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,pd) => total+pd.price , 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;    
    }
    let shipping = 0;
    if(total>35){
        shipping = 0
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = ( total + shipping + Number(tax)).toFixed(2)

    function formatNumber(Num){
        const precision = Num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product Price: {formatNumber(total)}</p>
            <p>shipping Charge: {shipping}</p>
            <p>Tax And VAT: {tax}</p>
            <p>Total Price: {grandTotal}</p>
            
        </div>
    );
};

export default Cart;
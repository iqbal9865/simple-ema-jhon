import React from 'react';

const ReviewItems = (props) => {
    const {name,quantity,key,price} = props.product;
    const reviewStyle = {
        marginBottom:'10px',
        marginLeft:'100px',
        borderBottom: '1px solid gray'
    }
    return (
        <div style={reviewStyle} className='review-item'>
            <h5 className='product-name'>{name}</h5>
            <h5>Quantity: {quantity}</h5>
            <p>Price: ${price}</p>
            <button onClick={()=>props.removeItems(key)} className='cart-button'>Remove Item</button>
            <br/>
            <br/>
        </div>
    );
};

export default ReviewItems;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props)
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h3 className='product-name'> <Link to={'/product/'+key}>{name}</Link> </h3>
            <br/>
            <small>by {seller} </small>
            <h4>${price}</h4>
            <p>only {stock} left in stock - order soon</p>
            {props.showAddToCart===true && <button onClick={()=>{props.handleAddProduct(props.product)}} className='cart-button'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
            
        </div>
    );
};

export default Product;<h1>This is a Product</h1>
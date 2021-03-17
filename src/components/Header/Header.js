import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css';
const Header = () => {
    const [logInUser, setLogInUser] = useContext(UserContext)
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Order Inventory</Link>
                <button onClick={()=>setLogInUser({})}>SignOut</button>
            </nav>
        </div>
    );
};

export default Header;
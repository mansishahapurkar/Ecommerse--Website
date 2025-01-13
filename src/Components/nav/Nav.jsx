
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Nav.css";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Nav() {
  // eslint-disable-next-line no-unused-vars
  let dispatch=useDispatch() //dispatch update store
  let items=useSelector(state=>state)
  return (
    <div className='nav'>
      <div className="top-nav">
      <Link to="/"><div className="logo">
          <span>V-shop</span>
          <FaShopify />
        </div></Link>
        <form className='search-box'>
          <input type="text" placeholder='Search Item..'/>
          <button><IoSearch /></button>
        </form>
         <Link to="/cart"><div className="cart-box">
         <FiShoppingCart />
         <span>{items.cart.length}</span>

         </div>
         </Link>

      </div>
      <div className="bottom-nav">
       <Link to="/"> <li>Home</li></Link>
       <Link to="/shop"><li>shop</li></Link>
       <Link to="/cart"><li>cart</li></Link>
       <Link to="/contact"><li>contact</li></Link>

      </div>
      
    </div>
  )
}

export default Nav

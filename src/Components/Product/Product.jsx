// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import "./Product.css"
import { useDispatch } from 'react-redux';
import { AddItem } from '../../Redux/cartSlice';
function Product({name,image,price,id}) {
    let dispatch=useDispatch()
    return(
        <div className='Product'>
            <img src={image} alt="" />
            <div className="Product-details">
                <span className='name'>{name}</span>
                <span className="price">Rs {price}/-</span>
                <button onClick={()=>{
              dispatch(AddItem({name:name,image:image,price:price,id:id})) 
              alert("Product Added Successfully...")        
                }}>Add +</button>
            </div>
        </div>
    )
}
Product.propTypes = {
    name: PropTypes.string.isRequired, // `name` must be a string and is required
    image: PropTypes.string.isRequired, // `image` must be a string and is required
    price: PropTypes.number.isRequired, // `price` must be a number and is required
     id:  PropTypes.number.isRequired    
};
export default Product
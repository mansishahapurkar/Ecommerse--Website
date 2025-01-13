// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Shop.css"
import {category} from '../../Category'
import {useState} from 'react'
import Product from '../../Components/Product/Product'
import {dummydata} from '../../dummydata'
import { FaShopify } from "react-icons/fa6";


function Shop  ()  {
     let [cate,setcate]=useState(category)
      function filterProducts(category){
        if(category==="All"){
            setcate(dummydata)
        }else{
        const updatedata= cate.filter((item)=>(item.category===category))
        setcate(updatedata)
        }
    
      }
    
  return (
    <div className='shop'>
        <div className='heading'>
            <span>Shop</span>
            <FaShopify />
        </div>
        <div className="category-section">
       {cate.map((item, index)=>(
        <div className="category-card" key={index} onClick={()=>{
          filterProducts(item.name)
        }}>
          <img src={item.image} alt={item.name} />
          <span>{item.name}</span>
          </div>
       ))}
       </div>
        <div className="Product-section">
               {cate.slice(0,5).map((item, index)=>(
                 <Product key={index} name= {item.name} price={item.price} image={item.image} id={item.id}/>
               ))}
              </div>
      
    </div>
  )
}

export default Shop

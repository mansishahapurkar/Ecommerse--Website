
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import Nav from '../../Components/nav/Nav'
import bg from '../../assets/bg0.gif'
import "./Home.css"
import Product from '../../Components/Product/Product'
import {dummydata} from '../../dummydata'


function Home() {
  
  let [cate,setcate]=useState(dummydata)
  function filterProducts(category){
    const updatedata= dummydata.filter((item)=>(item.category===category))
    setcate(updatedata)

  }
  return (
    <div className='home'>
      <Nav />
      <div className='hero-bg'>
        <img src={bg} alt=" " />
      </div>
      <div className="category-section">
       {cate.slice(0,7).map((item, index)=>(
        <div className="category-card" key={index} onClick={()=>{
          filterProducts(item.name)
        }}>
          <img src={item.image} alt={item.name} />
          <span>{item.name}</span>
          </div>
       ))}
       </div>
       <h1>Trending Products</h1>
       <div className="Product-section">
        {dummydata.slice(0,5).map((item, index)=>(
          <Product key={index} name= {item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
       </div>
    </div>
  )
}

export default Home

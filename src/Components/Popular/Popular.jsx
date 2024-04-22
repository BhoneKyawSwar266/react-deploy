import React, { useEffect, useState } from 'react'
import '../Popular/Popular.css'

import Item from '../Item/Item'

const Popular = () => {
  const[popular , setpopular] = useState([]);

  useEffect((e)=>{
    fetch ('https://vicherserver.onrender.com/popularinlaptop')
    .then((res)=> res.json())
    .then((data)=> setpopular(data))
  },[])

  return (
    <div className='popular'>
      <h1>Popular In Laptop</h1>
      <hr/>
      <div className='popular-item'>
        {
            popular.map((item)=> {
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular

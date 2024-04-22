import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}> <img src={props.image} alt="" onClick={window.scrollTo(0,0)}/></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price} MMK
            </div>
            {props.old_price ? (
            <div className="item-price-old">
              {props.old_price} MMK
            </div>
    ) : null}
        </div>
    </div>
  )
}

export default Item

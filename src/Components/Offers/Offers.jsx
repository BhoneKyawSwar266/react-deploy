import React from 'react'
import "../Offers/Offer.css"
import exclusive_image from '../Assets/exclusive_image.png'
import realoffer from '../Assets/realoffer.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS</p>
        
      </div>
      <div className='offers-right'>
        <img src={realoffer} alt="exclusive_image" />
      </div>
    </div>
  )
}

export default Offers

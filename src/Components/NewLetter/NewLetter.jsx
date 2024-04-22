import React from 'react'
import "../NewLetter/NewLetter.css"

const NewLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclsive Offers on Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter

import React from 'react'
import '../CSS/Gift.css'
import gift_card_img from '../Components/Assets/gift-card.webp'

const Gift = () => {
  return (
    <div className='gift-container'>
      <img src={gift_card_img} alt="" />
      <div>
        <h2>eGift Card</h2>
        <p>For new customer {`(use 1 time)`}</p>
        <p>Enter code: LAMHOANG24 to get 10% discount on total bill</p>
      </div>
    </div>
  )
}

export default Gift

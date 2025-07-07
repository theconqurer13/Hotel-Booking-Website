import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ExclusivOffers = () => {
  return (
    <div>
        <div>
            <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />
            <button>
                View All Offers
                <img src={assets.arrowIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default ExclusivOffers
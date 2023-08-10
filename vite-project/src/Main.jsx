import React from 'react'
import star from './img/star.png'
import katie from './img/katie-zaferes.png'

export default function Main(prop){
    return (
        <div className="main-container">
            {prop.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <div className="katie">
                <img src={prop.coverImg} className='katie-png' />
            </div> 
            <div className="katie-con">
                <p className='kp'><img src={star} alt="star.png" className='star'/><b>{prop.rating}</b><span>({prop.stats.reviewCount})  •  {prop.location}</span> </p>
                <p className="main-story">{prop.title}</p>
                <p><b>From ${prop.price}</b> / person</p>
            </div>
        </div>
    )
}
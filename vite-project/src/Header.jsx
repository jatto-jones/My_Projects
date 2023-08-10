import React from 'react'
import airbnb from './img/airbnb-logo.png'
import photogrid from './img/photo-grid.png'

export default function Header(){
    return (
        <div className='header'>
            <nav>
                <img src={airbnb} alt="airbnb-logo" className='airbnb' />
            </nav>
            <div className='header-body'>
                <div className='photo-con'>
                <img src={photogrid} alt="photo-grid" className='photo-grid'/>
                </div>
                <div className="header-content">
                    <h1>Online Experiences</h1>
                    <p className='hp'>Join unique interactive activities led by<br/>one-of-a-kind hosts—all without leaving<br/>home.</p>
                </div>
            </div>
        </div>
    )
}
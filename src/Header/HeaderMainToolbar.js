import React from 'react'
import './HeaderMainToolbar.css'
import fnplogo from '../Images/fnplogo.png'
import cartlogo from '../Images/cartlogo.png'
import userlogo from '../Images/userlogo.png'
import qslogo from '../Images/qslogo.png'
import timelogo from '../Images/timelogo.png'

export default function HeaderMainToolbar() {
    return (
        <div className="header-container">
            <div className="logo-search-container">
                <div className="logo-container">
                    <img className="fnp-logo" src={fnplogo} alt="fnplogo" />
                </div>
                <div className="search-container">
                Search Container</div>
            </div>
            <div className="header-cards">
                <figure>
                    <img className="fnp-logo cart-logo" src={timelogo} alt="fnplogo" />
                    <figcaption>Need Today?</figcaption>
                </figure>
                <figure>
                    <img className="fnp-logo" src={cartlogo} alt="fnplogo" />
                    <figcaption>Cart</figcaption>
                </figure>
                <figure>
                    <img className="fnp-logo cart-logo" src={userlogo} alt="fnplogo" />
                    <figcaption>Hi Guest</figcaption></figure>
                <figure>
                    <img className="fnp-logo cart-logo" src={qslogo} alt="fnplogo" />
                    <figcaption>Help Center</figcaption>
                </figure>
            </div>
        </div>
    )
}

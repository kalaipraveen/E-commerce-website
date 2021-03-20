import React from 'react'
import './HeaderMainToolbar.css'
import fnplogo from '../Images/fnplogo.png'
import cartlogo from '../Images/cartlogo.png'
import userlogo from '../Images/userlogo.png'
import qslogo from '../Images/qslogo.png'
import timelogo from '../Images/timelogo.png'

export default function HeaderMainToolbar() {
    return (
        <div className="header-main">
            <img id="fnp-logo" src={fnplogo} alt="fnplogo" />
                <span>
                    <ul className="header-main-carts">
                    <div className="time-logo">
                    <img src={timelogo} alt="timelogo"></img>
                    <figcaption>Need Today?</figcaption>
                    </div>
                    <div>
                        <li className="cart"></li>
                        <img src={cartlogo} alt="cart-logo"></img>
                        <figcaption>Cart</figcaption>
                        </div>
                        <div>
                        <li className="cart"> </li>
                        <img src={userlogo} alt="userlogo"></img>
                        <figcaption>Hi Guest</figcaption>
                        <li className="userlogo"></li>
                        </div>
                        <div>
                        <img src={qslogo} alt="qslogo"></img>
                        <figcaption>Help Center</figcaption>
                        <li className="cart"></li>
                        </div>
                    </ul>
                </span>
        </div>
    )
}

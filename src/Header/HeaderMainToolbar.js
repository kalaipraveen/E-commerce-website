import React from 'react'
import './HeaderMainToolbar.css'
import fnplogo from '../Images/fnplogo.png'
//import cartlogo from '../Images/cartlogo.png'
//import userlogo from '../Images/userlogo.png'
//import qsmarklogo from '../Images/qsmark.png'
//import timelogo from '../Images/time.png'

export default function HeaderMainToolbar() {
    return (
        <div className="header-main">
            <img id="fnp-logo" src={fnplogo} alt="fnplogo" />
                <span>
                    <ul className="header-main-carts">
                        <li className="cart">Need Today?</li>
                        <li className="cart">Cart</li>
                        <li className="cart">Hi Guest</li>
                        <li className="cart">Help Center</li>
                    </ul>
                </span>
        </div>
    )
}

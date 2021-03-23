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
                    <input class="search-container" type="search" placeholder="search flowersl, cakes, gifts etc" />
                </div>
            </div>
            <table className="header-cards">
                <tr>
                    <th className="header-cards-data"><img src={timelogo} alt="fnplogo" /></th>
                    <th className="header-cards-data"><img src={cartlogo} alt="fnplogo" /></th>
                    <th className="header-cards-data"><img src={userlogo} alt="fnplogo" /></th>
                    <th className="header-cards-data"><img src={qslogo} alt="fnplogo" /></th>
                </tr>
                <tr>
                    <td className="header-cards-data">Need Today?</td>
                    <td className="header-cards-data">cart</td>
                    <td className="header-cards-data">Hi Guest</td>
                    <td className="header-cards-data">Hi Guest</td>
                </tr>
            </table>
            {/**<div className="header-cards">
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
            </div> */}
        </div>
    )
}

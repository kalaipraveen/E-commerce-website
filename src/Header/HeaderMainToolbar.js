import React from 'react'
import './HeaderMainToolbar.css'
import fnplogo from '../Images/fnplogo.png'
import cartlogo from '../Images/cartlogo.png'
import userlogo from '../Images/userlogo.png'
import qslogo from '../Images/qslogo.png'
import timelogo from '../Images/timelogo.png'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function HeaderMainToolbar() {
    return (
        <div className="header-container">
            <div className="logo-search-container">
                <div className="logo-container">
                    <img className="fnp-logo" src={fnplogo} alt="fnplogo" />
                    <div className="delivery-container">
                        <LocationOnIcon /> Select Delivery Location <KeyboardArrowRightIcon />
                    </div>
                    <form class="search-container">
                        <input className="search-input" type="search" placeholder="search flowers, cakes, gifts etc" />
                        <button id="searchbtn" data-ga-title="Search" class="searchFormButton">
                            <SearchIcon fontSize="large" className="search-style" /> </button>
                    </form>
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
        </div>
    )
}

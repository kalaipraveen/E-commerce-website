import React from 'react'
import './HeaderInfoToolbar.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function HeaderInfoToolbar() {
    return (
        <div className="header-info">
            <ul>
                <li>Currency  INR <ArrowDropDownIcon /> </li>               
                <li>Corporate Gifts</li>
                <li>More <ArrowDropDownIcon /></li>
            </ul>
        </div>
    )
}

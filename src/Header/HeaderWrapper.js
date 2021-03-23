import React from 'react'
import './HeaderWrapper.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function HeaderWrapper() {
    return (
            <div className="wrapper-info">
                <ul>
                    <li>Holi <ArrowDropDownIcon /></li>
                    <li>Birthday <ArrowDropDownIcon /></li>
                    <li>Anniversary <ArrowDropDownIcon /></li>
                    <li>Cakes <ArrowDropDownIcon /></li>
                    <li>Flowers <ArrowDropDownIcon /></li>
                    <li>Personalized <ArrowDropDownIcon /></li>
                    <li>Plants <ArrowDropDownIcon /></li>
                    <li>Combos <ArrowDropDownIcon /></li>
                    <li>Chocolates <ArrowDropDownIcon /></li>
                    <li>More Gifts <ArrowDropDownIcon /></li>
                    <li>Occasional <ArrowDropDownIcon /></li>
                    <li>Global <ArrowDropDownIcon /></li>
                </ul>
            </div>
    )
}

import React from 'react'
import './HeaderProductsToolbar.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default function HeaderProductsToolbar() {
    const options = [
        'one', 'two', 'three'
      ];
    const defaultOption = options[0];  
    return (
        <div className="header-products">
            Product categories
        </div>
    )
}

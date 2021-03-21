import React from 'react';
import HeaderInfoToolbar from './HeaderInfoToolbar'
import HeaderMainToolbar from './HeaderMainToolbar'
import HeaderProductsToolbar from './HeaderProductsToolbar'
import HeaderBanner from './HeaderBanner'
import './Header.css'

export default function Header() {
    return (
        <div className="app-header">
            <div id="navbar">
                <HeaderInfoToolbar />
                <HeaderMainToolbar />
                <HeaderProductsToolbar />
            </div>
            <HeaderBanner />
        </div>
    )
}

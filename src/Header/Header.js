import React from 'react';
import HeaderInfoToolbar from './HeaderInfoToolbar'
import HeaderMainToolbar from './HeaderMainToolbar'
import HeaderProductsToolbar from './HeaderProductsToolbar'
import HeaderBanner from './HeaderBanner.js'



export default function Header() {
    return (
        <div className="app-header">
            <HeaderInfoToolbar />
            <HeaderMainToolbar />
            <HeaderProductsToolbar />
            <HeaderBanner />
        </div>
    )
}

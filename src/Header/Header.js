import React from 'react';
import HeaderInfoToolbar from './HeaderInfoToolbar'
import HeaderMainToolbar from './HeaderMainToolbar'
//import HeaderProductsToolbar from './HeaderProductsToolbar'
import ImageSlider from './ImageSlider'
import {SliderData} from './SliderData'
import './Header.css'

export default function Header() {
    return (
        <div className="app-header">
                <HeaderInfoToolbar />
                <HeaderMainToolbar />
                <ImageSlider slides = {SliderData} />
               {/*<HeaderProductsToolbar />*/}
            </div>
    )
}

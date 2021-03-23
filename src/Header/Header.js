import React from 'react';
import HeaderInfoToolbar from './HeaderInfoToolbar'
import HeaderMainToolbar from './HeaderMainToolbar'
import ImageSlider from './ImageSlider'
import {SliderData} from './SliderData'
import HeaderWrapper from './HeaderWrapper'
import './Header.css'

export default function Header() {
    return (
        <div className="app-header">
                <HeaderInfoToolbar />
                <HeaderMainToolbar />
                <HeaderWrapper />
                <ImageSlider slides = {SliderData} />
                
            </div>
    )
}

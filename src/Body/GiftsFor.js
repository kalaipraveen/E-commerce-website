import React from 'react'
import GiftsForData from './GiftForData'
import './GiftFor.css'

export default function GiftsFor() {
    return (
        <div>
        <div className="giftfor-tiles">
            <div className="giftfor-title">Gift For</div>
            <div className="giftfor-content">
                {GiftsForData.map((giftfor, index) => (
                    <div key={index}>
                        <div className="giftfor-card">
                            <img src={giftfor.imagelink} alt="categoriesimages" className="giftfor-image" />
                            <div className="giftfor-name">{giftfor.name}</div>
                            <div className="giftfor-description">{giftfor.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

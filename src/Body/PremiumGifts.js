import React from 'react'
import premiumgiftsdata from './PremiumGiftsData'
import './PremiumGifts.css'
export default function PremiumGifts() {
    return (
        <div>
        <div className="premiumgifts-tiles">
            <div className="premiumgifts-title">Premium Gifts
            </div>
            <div className="premiumgifts-content">
                {premiumgiftsdata.map((premiumgifts, index) => (
                    <div key={index}>
                        <div className="premiumgifts-card">
                            <img src={premiumgifts.imagelink} alt="premiumgiftsimages" className="premiumgifts-image" />
                            <div className="premiumgiftstiles-name">{premiumgifts.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

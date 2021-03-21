import React from 'react'
import DigitalGiftsData from './DigitalGiftsData'
import './DigitalGifts.css'

export default function DigitalGifts() {
    return (
        <div>
        <div className="digitalgifts-tiles">
            <div class="digitalgifts-title">Digital Gifts
            <a href="/gifts-bestsellers?promo=desk_hp_row1_pos_va" class="view-all">View All</a>
            </div>
            <div className="digitalgifts-content">
                {DigitalGiftsData.map((digitalgifts, index) => (
                    <div key={index}>
                        <div className="digitalgifts-card">
                            <img src={digitalgifts.imagelink} alt="digitalgiftsimages" className="digitalgifts-image" />
                            <div className="digitalgifts-name">{digitalgifts.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

import React from 'react'
import ComboGiftsData from './ComboGiftsData'
import './ComboGifts.css'

export default function ComboGifts() {
    return (
        <div>
        <div className="combogifts-tiles">
            <div class="combogifts-title">Combo Gifts
            <a href="/gifts-bestsellers?promo=desk_hp_row1_pos_va" class="view-all">View All</a>
            </div>
            <div className="combogifts-content">
                {ComboGiftsData.map((combogifts, index) => (
                    <div key={index}>
                        <div className="combogifts-card">
                            <img src={combogifts.imagelink} alt="combogiftsimages" className="combogifts-image" />
                            <div className="combogifts-name">{combogifts.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

import React from 'react'
import bestsellersdata from './BestSellerTilesData'
import './BestSellerTiles.css'

export default function BestSellerTiles() {
    return (
        <div>
        <div className="bestsellers-tiles">
            <div class="bestsellers-title">Birthday Bestsellers
            <a href="/gifts-bestsellers?promo=desk_hp_row1_pos_va" class="view-all">View All</a>
            </div>
            <div className="bestsellers-content">
                {bestsellersdata.map((bestsellerstiles, index) => (
                    <div key={index}>
                        <div className="bestsellers-card">
                            <img src={bestsellerstiles.imagelink} alt="bestsellersimages" className="bestsellers-image" />
                            <div className="bestsellerstiles-name">{bestsellerstiles.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

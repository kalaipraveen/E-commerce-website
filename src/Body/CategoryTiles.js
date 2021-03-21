import React from 'react'
import './CategoryTiles.css'
import categorytilesdata from './CategoryTilesData'

export default function CategoryTiles() {
    return (
        <div className="catagory-tiles">
            <div class="category-title">Shop By Bestseller Categories
                <a href="/gifts-bestsellers?promo=desk_hp_row1_pos_va" class="view-all">View All</a>
            </div>
            <div className="category-content">
            {categorytilesdata.map((categorytiles, index) => (
                <div key={index}>
                <div className="category-card">
                    <img src={categorytiles.imagelink} alt="categoriesimages" className="category-image" />
                    <div className="catagorytiles-name">{categorytiles.name}</div>
                </div>
                </div>
            ))}
        </div>
        </div>
    )
}

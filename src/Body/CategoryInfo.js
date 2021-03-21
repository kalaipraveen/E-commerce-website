import React from 'react'
import CategoryInfoData from './ProductData'
import './CategoryInfo.css'

export default function CategoryInfo() {
    return (
        <div>
            <div className="category-info">
                {CategoryInfoData.map((categories, index) => (
                    <div key={index}>
                        <img src={categories.imagelink} alt="productimage" className="product-image" />
                        <div className="product-name">{categories.name}</div>
                    </div>
                ))}
            </div>
            <div className="heading">
                <h1 className="maintitle"><span className="highlight">Fresh Flowers</span> &amp; Perfect Gifts for all Occasions</h1>
                <p className="mainsubtitle"><span className="highlight">3 Hour Delivery</span> &amp; Free Shipping in India. 66,732 Gift Ideas for your Beloved</p>
            </div></div>

    )
}

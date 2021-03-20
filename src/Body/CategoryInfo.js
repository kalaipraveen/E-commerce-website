import React from 'react'
import productsdata from './ProductData.json'
import './CategoryInfo.css'

export default function CategoryInfo() {
    return (
        <div>
            <div className="category-info">
                {productsdata.map((products, index) => (
                    <div key={index}>
                        <img src={products.imagelink} alt="productimage" className="product-image" />
                        <div className="product-name">{products.name}</div>
                    </div>
                ))}
            </div>
            <div class="heading">
                <h1 class="maintitle"><span class="highlight">Fresh Flowers</span> &amp; Perfect Gifts for all Occasions</h1>
                <p class="mainsubtitle"><span class="highlight">3 Hour Delivery</span> &amp; Free Shipping in India. 66,732 Gift Ideas for your Beloved</p>
            </div></div>

    )
}

import React from 'react'
import './body.css'
import CategoryInfoData from './CategoryInfoData.js'
import categorytilesdata from './CategoryTilesData'
import TrendingNowTilesdata from './TrendingNowTilesData'
import BestsellerTiles from './BestSellerTiles'
import CakesOnline from './CakesOnline'
import PremiumGifts from './PremiumGifts'
import AllFlowers from './AllFlowers'
import SendPersonalizedGifts from './SendPersonalizedGifts'
import DigitalGifts from './DigitalGifts'
import OnlinePlants from './OnlinePlants'
import ComboGifts from './ComboGifts'
import GiftFor from './GiftsFor'
import SendGiftsAbroad from './SendGiftsAbroad'
import QuickSearchForm from './QuickSearchForm'

export default function Body() {
  return (
   <div className="content-container">
    <QuickSearchForm />
    <div className="main-content">
      <CategoryInfo />
      <CategoryTiles />
      <TrendingNowTiles />
      <BestsellerTiles />
      <CakesOnline />
      <PremiumGifts />
      <AllFlowers />
      <SendPersonalizedGifts />
      <DigitalGifts />
      <OnlinePlants />
      <ComboGifts />
      <GiftFor />
      <SendGiftsAbroad />
    </div>
    </div>
  )
}


function CategoryInfo() {
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


function CategoryTiles() {
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





function TrendingNowTiles() {
    return (
        <div>
            <div className="trendingnow-tiles">
                <div class="trendingnow-title">Trending Now
                </div>
                <div className="trendingnow-content">
                    {TrendingNowTilesdata.map((trendingnowtiles, index) => {
                        return (
                            <div key={index}>
                                <div className="trendingnow-card">
                                    <img src={trendingnowtiles.imagelink} alt="trendingnowimages" className="trendingnow-image" />
                                    <div className="trendingnowtiles-name">{trendingnowtiles.name}</div>
                                    <div className="trendingnowtiles-description">{trendingnowtiles.description}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

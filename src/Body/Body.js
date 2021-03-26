import React from 'react'
import './body.css'
import CategoryInfoData from './CategoryInfoData.js'
import categorytilesdata from './CategoryTilesData'
import TrendingNowTilesdata from './TrendingNowTilesData'
import bestsellersdata from './BestSellerTilesData'
import cakesdata from './CakesOnlineData'
import premiumgiftsdata from './PremiumGiftsData'
import AllflowersData from './AllFlowersData'
import SendPersonalizedGiftsData from './SendPersonalizedGiftsData'
import DigitalGiftsData from './DigitalGiftsData'
import OnlinePlantsData from './OnlinePlantsData'
import ComboGiftsData from './ComboGiftsData'
import GiftsForData from './GiftForData'
import SendGiftsAbroadData from './SendGiftsAbroadData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default function Body() {
    return (
        <div className="content-container">
            <QuickSearchForm />
            <div className="main-content">
                <CategoryInfo />
                <CategoryTiles />
                <TrendingNowTiles />
                <BestSellerTiles />
                <CakeOnlineTiles />
                <PremiumGifts />
                <AllFlowers />
                <SendPersonalizedGifts />
                <DigitalGifts />
                <OnlinePlants />
                <ComboGifts />
                <GiftsFor />
                <SendGiftsAbroad />
            </div>
        </div>
    )
}



function QuickSearchForm() {
    return (
        <table className="searchform-card">
            <tr className="searchform-head">
                <th className="gift-text">Gift Finder </th>
                <th className="table-head">OCCASION <ArrowForwardIosIcon className="occasion-icon1" /></th>
                <th className="table-head">Gift Type <ArrowForwardIosIcon className="occasion-icon2" /></th>
                <th className="table-head no-border">Find Gifts</th>
            </tr>
        </table>
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




function BestSellerTiles() {
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


function CakeOnlineTiles() {
    return (
        <div>
            <div className="cakes-tiles">
                <div class="cakes-title">Cakes Online</div>
                <div className="cakes-content">
                    {cakesdata.map((cakes, index) => (
                        <div key={index}>
                            <div className="cakes-card">
                                <img src={cakes.imagelink} alt="categoriesimages" className="cakes-image" />
                                <div className="cakes-name">{cakes.name}</div>
                                <div className="cakes-description">{cakes.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}




function PremiumGifts() {
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




function AllFlowers() {
    return (
        <div>
            <div className="allflowers-tiles">
                <div class="allflowers-title">All Flowers</div>
                <div className="allflowers-content">
                    {AllflowersData.map((allflowers, index) => (
                        <div key={index}>
                            <div className="allflowers-card">
                                <img src={allflowers.imagelink} alt="allflowersimages" className="allflowers-image" />
                                <div className="allflowerstiles-name">{allflowers.name}</div>
                                <div className="allflowers-description">{allflowers.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}




function SendPersonalizedGifts() {
    return (
        <div>
            <div className="sendpersonalizedgift-tiles">
                <div class="sendpersonalizedgift-title">Send Personalized Gifts</div>
                <div className="sendpersonalizedgift-content">
                    {SendPersonalizedGiftsData.map((sendpersonalizedgift, index) => (
                        <div key={index}>
                            <div className="sendpersonalizedgift-card">
                                <img src={sendpersonalizedgift.imagelink} alt="sendpersonalizedgiftimages" className="sendpersonalizedgift-image" />
                                <div className="sendpersonalizedgifttiles-name">{sendpersonalizedgift.name}</div>
                                <div className="sendpersonalizedgift-description">{sendpersonalizedgift.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}




function DigitalGifts() {
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





function OnlinePlants() {
    return (
        <div>
            <div className="onlineplants-tiles">
                <div className="onlineplants-title">Online Plants Delivery</div>
                <div className="onlineplants-content">
                    {OnlinePlantsData.map((onlineplants, index) => (
                        <div key={index}>
                            <div className="onlineplants-card">
                                <img src={onlineplants.imagelink} alt="onlineplantsimages" className="onlineplants-image" />
                                <div className="onlineplantstiles-name">{onlineplants.name}</div>
                                <div className="onlineplants-description">{onlineplants.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}




function ComboGifts() {
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




function GiftsFor() {
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





function SendGiftsAbroad() {
    return (
        <div>
            <div className="sendgiftsabroad-tiles">
                <div className="sendgiftsabroad-info">
                    <div className="sendgiftsabroad-title">Send Gifts Abroad</div>
                    {SendGiftsAbroadData.map((sendgiftsabroad, index) => (
                        <div key={index}>
                            <div className="sendgiftsabroad-card">
                                <img src={sendgiftsabroad.imagelink} alt="sendgiftsabroadimage" className="sendgiftsabroad-image" />
                                <div className="product-name">{sendgiftsabroad.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

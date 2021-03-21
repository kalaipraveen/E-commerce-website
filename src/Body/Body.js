import React from 'react'
import './body.css'
import CategoryInfo from './CategoryInfo'
import CategoryTiles from './CategoryTiles'
import TrendingNowTiles from './TrendingNowTiles'
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

export default function Body() {
  return (
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
  )
}

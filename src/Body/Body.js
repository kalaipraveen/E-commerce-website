import React from 'react'
import './body.css'
import CategoryInfo from './CategoryInfo'
import CategoryTiles from './CategoryTiles'
import TrendingNowTiles from './TrendingNowTiles'
import BestsellerTiles from './BestSellerTiles'
import CakesOnline from './CakesOnline'

export default function Body() {
  return (
    <div className="main-content">
      <CategoryInfo />
      <CategoryTiles />
      <TrendingNowTiles />
      <BestsellerTiles />
      <CakesOnline />
    </div>
  )
}

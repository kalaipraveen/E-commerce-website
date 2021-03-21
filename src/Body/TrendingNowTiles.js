import React from 'react'
import TrendingNowTilesdata from './TrendingNowTilesData'
import './TrendingNowTiles.css'

export default function TrendingNowTiles() {
    return (
        <div>
            <div className="trendingnow-tiles">
                <div class="trendingnow-title">Trending Now
                </div>
                <div className="trendingnow-content">
                    {TrendingNowTilesdata.map((trendingnowtiles, index) => (
                        <div key={index}>
                            <div className="trendingnow-card">
                                <img src={trendingnowtiles.imagelink} alt="trendingnowimages" className="trendingnow-image" />
                                <div className="trendingnowtiles-name">{trendingnowtiles.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

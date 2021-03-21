import React from 'react'
import AllflowersData from './AllFlowersData'
import './AllFlowers.css'

export default function AllFlowers() {
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

import React from 'react'
import OnlinePlantsData from './OnlinePlantsData'
import './OnlinePlants.css'

export default function OnlinePlants() {
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

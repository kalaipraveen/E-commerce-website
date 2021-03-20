import React from 'react'
import './CakesOnline.css'
import cakesdata from './CakesOnline.json'


export default function CakeOnlineTiles() {
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

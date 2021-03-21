import React from 'react'
import SendPersonalizedGiftsData from './SendPersonalizedGiftsData'
import './SendPersonalizedGifts.css'

export default function SendPersonalizedGifts() {
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

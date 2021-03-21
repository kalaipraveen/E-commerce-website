import React from 'react'
import SendGiftsAbroadData from './SendGiftsAbroadData'
import './SendGiftsAbroad.css'

export default function SendGiftsAbroad() {
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

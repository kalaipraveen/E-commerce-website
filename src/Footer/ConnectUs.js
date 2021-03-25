import React from 'react'
import './ConnectUs.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paytm from '../Images/paytm.jpg'
import MasterCard from '../Images/mastercard.png'
import Airtel from '../Images/airtel.png'
import Paypal from '../Images/paypal.png'
import American from '../Images/american-express.jpg'
import Visa from '../Images/visa.png'
import Footerlinetwo from '../Images/footerlinetwo.PNG'

export default function ConnectUs() {
    return (
        <div className="footer-maincontent">
             <div id="footerline1">
                <ul id="connections">
                    <li className="subscribe right-border">
                        <h6>SIGN UP FOR EMAIL OFFERS &amp; UPDATES</h6>
                        <form id="subscribeform">
                            <input type="email" placeholder="Email" id="subscribeemailId" />
                            <div id="subscribeMsg" class="alert-box alert alert-bottom no-one" />
                            <button type="submit" class="btn postfix">SUBMIT</button>
                        </form>
                    </li>
                    <li className="socialtoolbar right-border">
                        <h6>CONNECT WITH US</h6>
                        <FacebookIcon fontSize='large' className="fb"/>
                        <TwitterIcon  fontSize='large' className="tw"/>
                        <PinterestIcon  fontSize='large' className="pi"/>
                        <InstagramIcon  fontSize='large' className="ig"/>
                    </li>
                    <li id="securetransactions">
                        <h6>SECURE ORDERING &amp; TRANSACTIONS</h6>
                        <img src={Paytm} alt="Secure Ordering &amp; Transactions" className="payment"></img>
                        <img src={MasterCard} alt="Secure Ordering &amp; Transactions" className="payment"></img>
                        <img src={Airtel} alt="Secure Ordering &amp; Transactions" className="payment"></img>
                        <img src={Paypal} alt="Secure Ordering &amp; Transactions" className="payment"></img>
                        <img src={American} alt="Secure Ordering &amp; Transactions" className="payment"></img>
                        <img src={Visa} alt="Secure Ordering &amp; Transactions" className="payment"></img>

                    </li>
                </ul>
            </div>
            <div id="footerline2">
            <img src={Footerlinetwo} alt="Secure Ordering &amp; Transactions" className="footer-line2"></img>
            </div>
            <div id="footerline3">
                <ul id="morelinks">
                    <li> <a href="/">About Us</a></li>
                    <li> <a href="/">FNP Team</a></li>
                    <li> <a href="/">Careers</a></li>
                    <li> <a href="/">Contact Us</a></li>
                    <li> <a href="/">Testimonials</a></li>
                    <li> <a href="/">Terms &amp; Conditions</a></li>
                    <li> <a href="/">Disclaimer</a></li>
                    <li> <a href="/">Terms Of Use</a></li>
                    <li> <a href="/">Privacy Policy</a></li>
                    <li> <a href="/">FAQs</a></li>
                    <li> <a href="/">Retail Stores</a></li>
                    <li> <a href="/">Franchise</a></li>
                    <li> <a href="/">Blog</a></li>
                    <li> <a href="/">Affiliate Program</a></li>
                    <li> <a href="/">Flower Astrology</a></li>
                    <li> <a href="/">News Room</a></li>
                    <li> <a href="/">Download App</a></li>
                    <li> <a href="/">Article Hub</a></li>
                    <li> <a href="/">Quotes N Wishes</a></li>
                    <li> <a href="/">Decoration Services</a></li>
                    <li> <a href="/">Care Guide</a></li>
                    <li> <a href="/">HTML sitemap</a></li>
                </ul>
                <p id="copyright">Copyright © 2021 www.codingmart-fnp.netlify.app. All rights reserved.</p>
            </div>
        </div>
    )
}

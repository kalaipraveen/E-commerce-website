import React from 'react'

export default function ImageSlider() {
  return (
    <div>
      <div>
        <div id="demo" class="carousel slide" data-ride="carousel">


          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
          </ul>


          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i7.fnp.com/assets/images/custom/new-desk-home/hero-banners/plants-desk-12-may-2021.jpg" alt="Los Angeles" width="100%" height="100%" />
            </div>
            <div class="carousel-item">
              <img src="https://i7.fnp.com/assets/images/custom/new-desk-home/hero-banners/SameDayDelivery1md2_3may_.jpg" alt="Chicago" width="100%" height="100%" />
            </div>
            <div class="carousel-item">
              <img src="https://i7.fnp.com/assets/images/custom/new-desk-home/hero-banners/video-messages-Desk-17-mar-2021.jpg" alt="New York" width="100%" height="100%" />
            </div>
            <div class="carousel-item">
              <img src="https://i7.fnp.com/assets/images/custom/new-desk-home/hero-banners/birthday-desk-banner-20-apr-2021.jpg" alt="New York" width="100%" height="100%" />
            </div>
            <div class="carousel-item">
              <img src="https://i7.fnp.com/assets/images/custom/new-desk-home/hero-banners/Combos-Desk-25-feb-2021.jpg" alt="New York" width="100%" height="100%" />
            </div>
            <div class="carousel-item">
              <img src="https://i7.fnp.com/assets/images/custom/new-desk-home/hero-banners/PersonalisedGifts1md2_3may_.jpg" alt="New York" width="100%" height="100%" />
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
  )
}

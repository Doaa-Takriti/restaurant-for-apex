import React from 'react'

const CarouselDigital = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner container">
      <div class="carousel-item active">
      <div class="row">
        
<div class="col-md-8">
    <h1>Your digital menu like never before</h1>
    <img src="../img/image17.png" alt="" />

</div>
<div class="col-md-4">
    <h3>Increase your revenue</h3>
    <p>
    Decrease operational costs by 30% <br/>
    Increase sales with cross offers <br/>
    Fast table turnover

    </p>
</div>
        </div>
      </div>
      <div class="carousel-item ">
      <div class="row">
        
<div class="col-md-8">
    <h1>Your digital menu like never before</h1>
    <img src="../img/image17.png" alt="" />

</div>
<div class="col-md-4">
    <h3>Increase your revenue</h3>
    <p>
    Decrease operational costs by 30% <br/>
    Increase sales with cross offers <br/>
    Fast table turnover

    </p>
</div>
        </div>
      </div>
      <div class="carousel-item">
      <div class="row">
        
<div class="col-md-8">
    <h1>Your digital menu like never before</h1>
    <img src="../img/image17.png" alt="" />

</div>
<div class="col-md-4">
    <h3>Increase your revenue</h3>
    <p>
    Decrease operational costs by 30% <br/>
    Increase sales with cross offers <br/>
    Fast table turnover

    </p>
</div>
        </div>
      </div>
   
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default CarouselDigital

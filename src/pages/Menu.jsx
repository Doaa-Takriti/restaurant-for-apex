import React from 'react';
import "../assets/mobile.css"

const Menu = () => {
  return (
    <div className='menu'>
        <img src="../img/image1.png" alt="" className='img1' />
      
        <div class="dropdown">

       <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

        <img src="../img/Internet.png" className='inter' alt="" />
        </button>
        <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">english</a></li>
    <li><a class="dropdown-item" href="#">arabic</a></li>
  </ul>
        </div>
        <h1>Restaurant </h1>
        <p>Lorem ipsum dolor sit amet, consectetur <br/>
        adipiscing elit. Ut et massa mi.</p>
      <a href="#" className='btn-menu'>Menu</a>
      <span>© Apex Software Solutions.</span>
      
    </div>
  )
}

export default Menu

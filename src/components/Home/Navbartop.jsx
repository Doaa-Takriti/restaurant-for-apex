import React from 'react'

const Navbartop = () => {
  return (
    <div className='navtop'>
        <div className='row'>
            <div className="col-md-4">
               <img src="../img/Group1(1).png" alt="" />
               <span>Apex Software Solutions.</span>
            </div>
            <div className="col-md-4">
               <ul>
                <li className='active'>Home</li>
                <li>Restaurant</li>

                <li>Hotel</li>

                <li>Price</li>

               </ul>
            </div>
            <div className="col-md-4 ">
               <a className='btn-log' >Login</a>
               <div class="dropdown">
  <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  English
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            </div>
        </div>
   
    </div>
  )
}

export default Navbartop

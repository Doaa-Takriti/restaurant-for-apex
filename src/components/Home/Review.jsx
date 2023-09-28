import React from 'react'
import data from "../../Data.json"
const Review = () => {
  return (
    <div className='revirew'>
        <div className='row'>
            <div className='col-md-6'>
                <img src="./img/image25.png" alt=""/>
            </div>
            <div className='col-md-6'>
            <div>
            <h1>
                    Some of our guests reviews

                    </h1>
      {data.review.map((item) => (
        <div className='desc-review' key={item.id}>
                   <p>
                  {item.desc}
                    </p>
                    <div className='d-flex'>
                        <div> <img src={'./img/' + item.img} alt="" className='img-rad' /></div>
                       
                        <div className='desc-imgred'>
                            <p>{item.title}</p>
                            <ul>
  {[1, 2, 3, 4,5].map((item, index) => (
    <li key={index}>
      <img src="./img/image20.png" alt="" />
    </li>
  ))}
</ul>
                        </div>
                    </div>
       
        </div>
      ))}
    </div>          
    
           
            </div>
        </div>
      
    </div>
  )
}

export default Review

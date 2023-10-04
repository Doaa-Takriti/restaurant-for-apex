import React,{useState} from 'react'

const Rating = (props) => {


  
  return (
   <>
      {[...Array(5)].map((x, i) => {
              return (
                <i
                  key={i}
                  className="far fa-star"
                  id={`star-${i + 1}`}
                  onMouseOver={(e) => props.onMouseOver(i + 1)}
                  onMouseOut={(e) => props.onMouseOut(i + 1)}
                  onClick={(e) => props.onClick(i + 1)}
                />
              );
            })}
   </>
  )
}

export default Rating

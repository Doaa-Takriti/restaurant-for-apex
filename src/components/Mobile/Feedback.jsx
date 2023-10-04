import React, { useState } from 'react';
const Feedback = () => {
    const [clicked, setClicked] = useState(false);
    const [stars, setStars] = useState(1);
    const [clicked2, setClicked2] = useState(false);
    const [stars2, setStars2] = useState(1);
    const [clicked3, setClicked3] = useState(false);
    const [stars3, setStars3] = useState(1);

    const [review, setReview] = useState("");
    const [comment, setComment] = useState("");

    const [reviews, setReviews] = useState([]);
  


    const onMouseOver = (rating) => {
      if (clicked) return;
  
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
      });
    };

    const onMouseOut = (rating) => {
      if (clicked) return;
  
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
      });
    };
  
  
    const onClick = (rating) => {
      setClicked(true);
      setStars(rating);
      // Reset
  
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
      });
      // highlight
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
      });
    };
    const onMouseOver2 = (rating) => {
        if (clicked2) return;
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star2-${i + 1}`).classList.replace("far", "fas");
        });
      };
  
      const onMouseOut2 = (rating) => {
        if (clicked2) return;
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star2-${i + 1}`).classList.replace("fas", "far");
        });
      };
    
    
      const onClick2 = (rating) => {
        setClicked2(true);
        setStars2(rating);
        // Reset
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star2-${i + 1}`).classList.replace("fas", "far");
        });
        // highlight
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star2-${i + 1}`).classList.replace("far", "fas");
        });
      };
  

      const onMouseOver3 = (rating) => {
        if (clicked3) return;
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star3-${i + 1}`).classList.replace("far", "fas");
        });
      };
  
      const onMouseOut3 = (rating) => {
        if (clicked3) return;
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star3-${i + 1}`).classList.replace("fas", "far");
        });
      };
    
    
      const onClick3 = (rating) => {
        setClicked3(true);
        setStars3(rating);
        // Reset
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star3-${i + 1}`).classList.replace("fas", "far");
        });
        // highlight
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star3-${i + 1}`).classList.replace("far", "fas");
        });
      };
  

  
    const resetForm = (e) => {
      e.preventDefault();
  
      // Reset
      [...Array(5)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
      });
      [...Array(5)].map((x, i) => {
        document.querySelector(`#star2-${i + 1}`).classList.replace("fas", "far");
      });
      [...Array(5)].map((x, i) => {
        document.querySelector(`#star3-${i + 1}`).classList.replace("fas", "far");
      });
      setReview("");
      setComment("");
      setStars(1);
      setClicked(false);
      setStars2(1);
      setClicked2(false);
      setStars3(1);
      setClicked3(false);
    };
  
    const submitReview = (e) => {
      e.preventDefault();
      const newReview = {
        rating: stars,
        rating2: stars2,
        rating3: stars3,


       

        
     

comment:comment,
        phoneoremail: review,
      };
  
      setReviews([...reviews, newReview]);
      console.log("reviews",newReview)
      resetForm(e);
    };
 
  

  return (
    <div className='feedback container-fluid'>

        <h1>Feedback</h1>
        <form>
            <label>Over All</label>
            <div className='emojie'>
                <input type="text" placeholder='Enter Your Comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)} />

            </div>
            <br/>
            <label>Service</label>
            <div className='reating-star reating-star1'>
            {[...Array(5)].map((x, i) => {
              return (
                <i
                  key={i}
                  className="far fa-star"
                  id={`star-${i + 1}`}
                  onMouseOver={(e) => onMouseOver(i + 1)}
                  onMouseOut={(e) => onMouseOut(i + 1)}
                  onClick={(e) => onClick(i + 1)}
                />
              );
            })}
            </div>
            <label>Staff</label>
            <div className='reating-star reating-star2'>
     
            {[...Array(5)].map((x, i) => {
              return (
                <i
                  key={i}
                  className="far fa-star"
                  id={`star2-${i + 1}`}
                  onMouseOver={(e) => onMouseOver2(i + 1)}
                  onMouseOut={(e) => onMouseOut2(i + 1)}
                  onClick={(e) => onClick2(i + 1)}
                />
              );
            })}
            </div>
            <label>Hygiene</label>
            <div className='reating-star'>
            {[...Array(5)].map((x, i) => {
              return (
                <i
                  key={i}
                  className="far fa-star"
                  id={`star3-${i + 1}`}
                  onMouseOver={(e) => onMouseOver3(i + 1)}
                  onMouseOut={(e) => onMouseOut3(i + 1)}
                  onClick={(e) => onClick3(i + 1)}
                />
              );
            })}
            </div>
            <label>Over All</label>
            <div>
            <input    value={review}
                onChange={(e) => setReview(e.target.value)}
             className='phone' type="text" placeholder='Your Phone number or E-Mail Address (optional)' />

 </div>
 <a href="#"       onClick={(e) => submitReview(e)}
              disabled={review === ""} className='btn-send' >
    Send
 </a>
        </form>
      
    </div>
  )
}

export default Feedback

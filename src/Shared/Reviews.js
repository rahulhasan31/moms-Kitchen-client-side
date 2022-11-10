import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
   
    const [reviews, setReviews] = useState([]);
   
    const {user}= useContext(AuthContext)


    
   useEffect(()=>{
     
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res=> res.json())
    .then(data => setReviews(data))
   


   },[user?.email])

  
 




    return (
        <div>
           

           {
             reviews?.length === 0 ? <p className='text-xl text-black'>No Reviews</p> : <>
             {
                reviews.map(review=> <ReviewRow
                key={review._id}
                review={review}
               
                ></ReviewRow>)
              }
              </>
           }
        
        </div>
    );
};

export default Reviews;
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hook/UseTitle';
import ReviewRow from './ReviewRow';

const Reviews = () => {
  useTitle('Review')
   
    const [reviews, setReviews] = useState([]);
   
    const {user, logOut}= useContext(AuthContext)


    
   useEffect(()=>{
     
    fetch(`https://photographer-server-eight.vercel.app/reviews?email=${user?.email}`)
    .then(res=> res.json())
    .then(data => {
      setReviews(data)
    })
   


   },[user?.email])

  console.log(reviews);
 




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
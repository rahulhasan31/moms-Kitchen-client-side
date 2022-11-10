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
     
    fetch(`http://localhost:5000/reviews?email=${user?.email}` , {
       
    headers:{
      authorization : `bear ${localStorage.getItem('token')}`
    }

    })
    .then(res=> {
      if (res.status === 401 || res.status === 403) {
        return logOut();
    }
       return res.json()
    })
    .then(data => {
      setReviews(data)
    })
   


   },[user?.email, logOut])

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
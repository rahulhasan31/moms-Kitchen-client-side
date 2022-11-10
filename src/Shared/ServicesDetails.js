import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import AddReview from '../Pages/AddReview';



const ServicesDetails = () => {
    const {_id , price,img, description, title }= useLoaderData()
    const {user}= useContext(AuthContext)

    const[addReview, setAddReview]= useState([])
    console.log(addReview);
   
    useEffect(()=>{

      fetch(`http://localhost:5000/reviews/${_id}`)

      .then(res=> res.json())
      .then(data=> setAddReview(data))
  },[])
   
   
    const handlePlaceSubmit= event=>{
       event.preventDefault()
       const form=event.target
       const name= `${form.name.value} `
       const email= user?.email || 'unregister'
        const message= form.message.value

       const review= {
         service:_id,
         serviceName: title,
         price,
         customer:name, 
         email,
         message

       }


       fetch('http://localhost:5000/reviews', {

           method : "POST",
           headers: {

            'content-type':'application/json'
           },
           body : JSON.stringify(review)

       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.acknowledged){
           alert('reviews Done')
           form.reset()
        }
       })
       .catch(e=>console.log(e))

    }
    

    return (
        <div className='grid grid-cols-1 '>
              
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p className='card-title text-red-700'>price: ${price}</p>
    <p>{description}</p>

    <div className="card-actions">
       <Link to={`/reviews`}><button className="btn btn-primary">My Reviews</button></Link>
    </div>
  </div>
</div>

      <div className='grid grid-cols-1  mt-6 gap-10'>
      <form onSubmit={handlePlaceSubmit}>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <input name='name' type="name" readOnly defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
       <input name='email' type="email" readOnly defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " />
    
       
        </div>
        <br />
        <div className='mb-5'>
        <textarea  name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Reviews" required></textarea>
        <input className="btn btn-wide btn-warning" type="submit" value="Send Your Reviews" />

        <Link className='mx-1' to={'/services'}><input className="btn btn-wide btn-warning" type="submit" value="Go to services" /></Link>
         
        </div>
       </form>
      </div>
      
            {
              addReview.map(review=> <AddReview
               key={review._id}
               review={review}
              ></AddReview>)
            }
        </div>
    );
};

export default ServicesDetails;
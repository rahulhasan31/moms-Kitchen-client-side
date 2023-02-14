import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AiFillStar } from 'react-icons/ai';

const ServicesCard = ({service}) => {
    const {_id , price,img, description, title }= service
    console.log('service card', service);

   
   

    return (
//         <div data-aos="flip-left"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="2000">
          
//           <div className="card h-full   bg-base-100 shadow-xl">
//           <figure className="p-1">


// <PhotoProvider>
  
//  <PhotoView src={img}>
//  <img src={img} alt="services" className="rounded-xl" />
//  </PhotoView>
 
//   </PhotoProvider>
  

 
// </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {title}
//       <div className="badge badge-secondary">${price}</div>
//     </h2>
//     <p>
//      {
//       description?.length > 100 ? <>{description.slice(0,100)+'...'}</>
//       :
//       description
//      }
//      </p>
//     <div className="card-actions justify-end">
//       <Link to={`/services/${_id}`}><button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none ">Details</button> </Link>
      
//     </div>
//   </div>
// </div>
//         </div>
<div className="card  shadow-xl w-auto h-4/5">
  <figure><img src={img} alt="Shoes" className='w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{
     description?.length> 100 ? 
     <>{description.slice(0, 100)+'...'} </> 
     :
     {description}
  
    }</p>
    <div className="card-actions ">
      <div className="badge badge-accent">Food</div> 
      <div className="badge badge-warning">Available</div>
      
    </div>
    <div className='flex justify-between mt-3'>
      <div className="badge badge-secondary text-xl py-3 ">${price}</div>
     <div>
      <div className='flex'>
      <div className="flex  text-xl text-red-500 ">
      <AiFillStar></AiFillStar>
      <AiFillStar></AiFillStar>
      <AiFillStar></AiFillStar>
      <AiFillStar></AiFillStar>
      <AiFillStar></AiFillStar>

      
      </div>
      <div className='ml-5 font-bold text-xl text-pink-600'>4.5</div>
      </div>
     </div>
      

      </div>

  </div>
  <div className=' bg-sky-600 px-2 py-2 rounded-b-xl flex  justify-around items-center'>
  <div className="avatar">
  <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src="https://i.ibb.co/1bRKSBV/149452303-mom-kitchen-logo-vector-illustration-with-modern-typography-chef-mascot-logo.webp" />
  </div>
</div>
<div className="  ">
      <Link to={`/services/${_id}`} > <button className=" badge badge-warning py-5 px-10 font-semibold ">Details</button></Link>
    </div>
  </div>
</div>

    );
};

export default ServicesCard;
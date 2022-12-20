import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({service}) => {
    const {_id , price,img, description, title }= service
    console.log('service card', service);

   
   

    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          
          <div className="card h-full   bg-base-100 shadow-xl">
          <figure className="p-1">


<PhotoProvider>
  
 <PhotoView src={img}>
 <img src={img} alt="services" className="rounded-xl" />
 </PhotoView>
 
  </PhotoProvider>
  

 
</figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">${price}</div>
    </h2>
    <p>
     {
      description?.length > 100 ? <>{description.slice(0,100)+'...'}</>
      :
      description
     }
     </p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none ">Details</button> </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;
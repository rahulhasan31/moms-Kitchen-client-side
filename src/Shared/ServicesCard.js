import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({service}) => {
    const {_id , price,img, description, title }= service
    console.log(service);

   
    

    return (
        <div>
          
            <div className="card w-96  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">


  <PhotoProvider>
    
   <PhotoView src={img}>
   <img src={img} alt="services" className="rounded-xl" />
   </PhotoView>
   
    </PhotoProvider>
    
  
   
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <h2 className="card-title text-red-700">Price :${price}</h2>
    <p>{
     description?.length> 100 ? <>{description.slice(0, 100)+'...'} </> 
     :
     {description}
  
    }</p>
    <div className="card-actions">
       <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;
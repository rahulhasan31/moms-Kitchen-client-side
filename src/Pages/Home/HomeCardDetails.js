import React from 'react';

import { Link } from 'react-router-dom';

const HomeCardDetails = ({card}) => {
    const {_id , price,img, description, title }=card

    return (
        <div >
           <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card  h-full bg-base-100 shadow-xl">
  <figure className="p-1">
    
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p>{
     description?.length> 100 ? 
     <>{description.slice(0, 100)+'...'} </> 
     :
     {description}
  
    }</p>
    <p className="card-title text-red-700">price: ${price}</p>
    <div className="card-actions">
      <Link to={`/services/${_id}`} > <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Details</button></Link>
    </div>
    
  </div>
</div>

        </div>
    );
};

export default HomeCardDetails;
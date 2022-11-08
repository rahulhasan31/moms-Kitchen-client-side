import React from 'react';

import { Link } from 'react-router-dom';

const HomeCardDetails = ({card}) => {
    const {_id , price,img, description, title }=card

    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p>{
     description?.length> 100 ? <>{description.slice(0, 100)+'...'} </> 
     :
     {description}
  
    }</p>
    <p className="card-title text-red-700">price: ${price}</p>
    <div className="card-actions">
      <Link to={`/services/${_id}`} > <button className="btn btn-primary">Details</button></Link>
    </div>
    
  </div>
</div>

        </div>
    );
};

export default HomeCardDetails;
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ServicesDetails = () => {
    const {_id , price,img, description, title }= useLoaderData()
    

    return (
        <div>
              
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p>{description}</p>
    <div className="card-actions">
       <Link to={``}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesDetails;
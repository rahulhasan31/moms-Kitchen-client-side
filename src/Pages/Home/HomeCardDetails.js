import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HomeCardDetails = ({card}) => {
    const {_id , price,img, description, title }=card

    return (
        <div >
           
<div className="card  shadow-xl w-auto h-4/5 ">
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

        </div>
    );
};

export default HomeCardDetails;
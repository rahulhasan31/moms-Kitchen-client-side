import React from 'react';

const WorkCard = () => {
    return (
        <div className='lg:grid grid-cols-3 gap-4'>
            <div className="card  ">
  <figure><img src="https://i.ibb.co/VVxkTVg/order-homemade-dish-5499e85f2c958ee24335.gif" alt="Shoes" className=' w-full p-10' /></figure>
  <div className="card-body text-center">
    <h2 className=" text-center text-xl font-semibold">
    Order
     
    </h2>
    <p>Add dishes to your cart, select pickup or delivery date & time and checkout - it’s that easy!</p>
  
  </div>
           </div>
            <div className="card  ">
  <figure><img src="https://i.ibb.co/ZgL70Lc/Explore-homemade-dishes-20afb12925d5e56a7f9a.gif" className='  w-full p-11' alt="Shoes" /></figure>
  <div className="">
    <h2 className=" text-center font-semibold text-xl">
    Explore
      
    </h2>
    <p className='text-center'>MiDu Kitchen homemade meals near you. All of our HomeCooks are carefully vetted & food safety certified.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
           </div>
            <div className="card  ">
  <figure><img src="https://i.ibb.co/PYxK6tp/enjoy-homemade-049e5d326c02a86e7947.gif" alt="Shoes" className='w-full p-9 max-h-max ' /></figure>
  <div className=" lg:mt-20">
    <h2 className=" text-center text-xl font-semibold">
    Enjoy
     
    </h2>
    <p className='text-center'>Do curbside pickup or get your order delivered directly to your door. Food is delivered hot and ready to eat!</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
           </div>
        </div>
    );
};

export default WorkCard;
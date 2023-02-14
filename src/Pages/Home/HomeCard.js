
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCardDetails from './HomeCardDetails';
import Typewriter from 'typewriter-effect';

const HomeCard = () => {
    const [limitCard, setLimitCard]= useState([])

    useEffect(()=>{
        fetch('https://photographer-server-eight.vercel.app/')
        .then(res=>res.json())
        .then(data=> setLimitCard(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-2'><span className='text-red-500'><Typewriter
  options={{
    strings: ['Category', ''],
    autoStart: true,
    loop: true,
  }}
/> </span> Service</h1>
        <div className='grid grid-cols-1 gap-10 xl:grid-cols-3 mb-0'>
            
            {
                limitCard?.map(card=> <HomeCardDetails 
                key={card._id}
                card={card}
                ></HomeCardDetails>)
            }
            
        </div>
        
        <div  className='text-center mx-auto mb-5'>
            <Link to={`/services`} > <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">SEE All</button></Link>
            </div>
        </div>
    );
};

export default HomeCard;
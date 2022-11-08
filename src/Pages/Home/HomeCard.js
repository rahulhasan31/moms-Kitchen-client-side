import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCardDetails from './HomeCardDetails';

const HomeCard = () => {
    const [limitCard, setLimitCard]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=> setLimitCard(data))
    },[])
    return (
        <div>
        <div className=' grid-cols-1 xl:grid grid-cols-3 mb-5'>
            
            {
                limitCard?.map(card=> <HomeCardDetails 
                key={card._id}
                card={card}
                ></HomeCardDetails>)
            }
            
        </div>
        <div className='text-center mx-auto mb-5'>
            <Link to={`/services`} > <button className="btn btn-primary">SEE All</button></Link>
            </div>
        </div>
    );
};

export default HomeCard;
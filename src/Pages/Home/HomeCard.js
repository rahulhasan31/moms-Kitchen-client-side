import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import HomeCardDetails from './HomeCardDetails';

const HomeCard = () => {
    const [limitCard, setLimitCard]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=> setLimitCard(data))
    },[])
    return (
        <div className=' grid-cols-1 xl:grid grid-cols-3 mb-5'>
            
            {
                limitCard?.map(card=> <HomeCardDetails 
                key={card._id}
                card={card}
                ></HomeCardDetails>)
            }
        </div>
    );
};

export default HomeCard;

import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthProvider';
import ServicesCard from './ServicesCard';

const Services = () => {
    const {user}= useContext(AuthContext)
    // const services= useLoaderData()
    const [services , setService]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setService(data))
    },[setService])
    console.log(user);
    return (
        <div className='grid grid-cols-1 xl:grid grid-cols-3 gap-10'>
            
            {
                services.map(service=> <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
        </div>
    );
};

export default Services;
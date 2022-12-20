
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hook/UseTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    useTitle('Services')
    const {user}= useContext(AuthContext)
    const [loading , setLoading]= useState(true)
    
    // const services= useLoaderData()
    const [services , setService]= useState([])
      
  console.log('tik ase',services)

    useEffect(()=>{
        fetch('https://photographer-server-eight.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            
            setService(data)
            setLoading(false)
        })
       
    },[setService])
    console.log(user);
    return (
        <div  className='grid  grid-cols-1 xl:grid-cols-3 gap-10   p-10'>
      {
        services?.map(service=> <ServicesCard
            service={service}
          key={service._id}
        ></ServicesCard>)
      }
        </div>
    );
};

export default Services;
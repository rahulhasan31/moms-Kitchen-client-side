
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../Hook/UseTitle';
import Loaing from './Loading/Loaing';
import ServicesCard from './ServicesCard';

const Services = () => {
    useTitle('Services')
    const {user}= useContext(AuthContext)
    const [loading , setLoading]= useState(true)
    const [isLoading , SetIsLoading]=useState(true)
    
    // const services= useLoaderData()
    const [services , setService]= useState([])
      
    useEffect(()=>{
      setTimeout(()=>{
        SetIsLoading(false)
      }, 2500)
  })

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
        <div  className='grid  grid-cols-1 xl:grid-cols-3 gap-5   '>
     {
      isLoading?<Loaing/>:<>
       {
        services?.map(service=> <ServicesCard
            service={service}
          key={service._id}
        ></ServicesCard>)
      }
      </>
     }
        </div>
    );
};

export default Services;
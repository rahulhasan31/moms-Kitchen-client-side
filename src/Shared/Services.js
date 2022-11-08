import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ServicesCard from './ServicesCard';

const Services = () => {
    const {user}= useContext(AuthContext)
    const services= useLoaderData()
    console.log(user);
    return (
        <div className='grid-cols-1 xl:grid grid-cols-3 gap-10'>
            
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
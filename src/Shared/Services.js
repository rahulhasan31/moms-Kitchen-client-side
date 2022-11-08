import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Services = () => {
    const {user}= useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h2>all services {user?.displayName}</h2>
        </div>
    );
};

export default Services;
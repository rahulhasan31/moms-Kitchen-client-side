import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const reviewUser=useLoaderData()
    const [user, setUser] = useState(reviewUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        console.log(user);
        fetch(`http://localhost:5000/reviews/${reviewUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('Review updated')
                console.log(data);
            }
            
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div className='mx-10'>
            <p>update: {reviewUser.serviceName}</p>
            <form  onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} className="input w-full max-w-xs mb-5" defaultValue={reviewUser.serviceName} type="text" name='name' placeholder='name' required />
                <br />
                <input onChange={handleInputChange} className="input w-full max-w-xs mb-5" type="text" defaultValue={reviewUser.message} name='message' placeholder='message' required />
                <br />
                <input onChange={handleInputChange} className="input w-full max-w-xs" type="email" defaultValue={reviewUser.email} readOnly name="email" id="" placeholder='email'  required  />
                <br />
                <button  className="btn btn-warning mt-5" type="submit">Update User</button>
                <Link to={'/reviews'}><button  className="btn btn-warning mt-5 mx-5" type="submit">go to review</button></Link>
            </form>
        </div>
    );
};

export default EditReview;
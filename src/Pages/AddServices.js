import { data } from 'autoprefixer';
import React from 'react';
import useTitle from '../Hook/UseTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {

useTitle("Add Services")
    const handleSubmit=event=>{
        event.preventDefault()
      const form=event.target
      const title=form.title.value
      const img= form.img.value
      const price= form.price.value
      const description= form.description.value
      

      console.log(title,img, price, description);

      const addService={
        title,
        img,
        price,
        description,
        created :  Date()


      }

      fetch('http://localhost:5000/services', {
        method: 'POST',
        headers :{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addService)
      })
      .then(res=>res.json())
      .then(data=> {
        if(data.acknowledged){
            toast("Added successfully")
            form.reset()
        }
        console.log(data);
      })
      .catch(e=>console.log(e))
    }
    return (
        <div>
            
          <form onSubmit={handleSubmit} className='grid grid-cols-1 xl:grid-cols-1 gap-4 text-center' >

          <input name='title' type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
          <input name='img' type="text" placeholder="PhotoURl" className="input input-bordered w-full max-w-xs" />
          <input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
          <input name='description' type="text" placeholder="description" className="input input-bordered w-full max-w-xs" />
          
          <input type="submit" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

          </form>
          <ToastContainer />
        </div>
    );
};

export default AddServices;

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

      fetch('https://photographer-server-eight.vercel.app/services', {
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
        <div className='px-6 '>
          <h1 className='text-center text-4xl font-bold'><span className='text-red-500'>Add </span>Service</h1>
            
          <form onSubmit={handleSubmit} className='grid grid-cols-1 xl:grid-cols-1 gap-4 text-center' >

          <input name='title' type="text" placeholder="Title" required className="input input-bordered w-full max-w-xs" />
          <input name='img' type="text" placeholder="PhotoURl" required className="input input-bordered w-full max-w-xs" />
          <input name='price' type="text" placeholder="Price" required className="input input-bordered w-full max-w-xs" />
          <input name='description' type="text" required placeholder="description" className="input input-bordered w-full max-w-xs" />
          
          <input type="submit" placeholder="Type here" className="input input-bordered mb-5 max-w-xs inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none " />

          </form>
          <ToastContainer />
        </div>
    );
};

export default AddServices;

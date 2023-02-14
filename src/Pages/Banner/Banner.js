import React from 'react';
import img1 from '../../assets/Studio photographer-amico.png'
import img2 from '../../assets/Studio photographer-pana.png'
import img3 from '../../assets/Studio photographer-rafiki.png'
import Typewriter from 'typewriter-effect';


const Banner = () => {

    return (
        <div className='grid grid-clos-1'>
        <div className="hero  ">
  <div className="hero-content lg:gap- flex-col lg:flex-row-reverse">
    <img alt='' src="https://i.ibb.co/GccHvJX/6f5d09a31069fd9253af73f57032ff2b.webp" className=" rounded-md   " />
    <div className='  lg:w-1/2'>
      <h1 className="text-3xl font-bold text-green-500">Hey Wellcome to</h1>
      <h1 className="text-5xl font-bold mt-2 text-red-500"><span className=' text-yellow-400'>Best One</span> Kitchen
</h1>
<p className='mt-3 font-semibold'>I'm Midu ! I'm a professional chef and I have been cooking for 10 years. I have providign the best homemake food for my customers !!</p>
      <button className="btn btn-warning lg:mt-5">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
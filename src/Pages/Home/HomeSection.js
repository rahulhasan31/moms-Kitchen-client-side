import React, { useState } from 'react';


const HomeSection = () => {

    const [menu, setMenu] = useState(false);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            
         <div className='grid grid-cols-1 w-full lg:grid-cols-4'>
         
         <div className="card ">
  <figure><img src="https://i.ibb.co/MNDwLjx/joy-25d4e1358354941f5ca6874b0ac68180.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sharing Joy</h2>
    <p>Enjoy community through food</p>
  
  </div>
</div>
         <div className="card ">
  <figure><img src="https://i.ibb.co/6XbF3B1/neighbors-638402b5c3dbc09842a042050d58865b.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Nourishing Neighbors</h2>
    <p>Eat wholesome. Eat better.</p>
  
  </div>
</div>
         <div className="card ">
  <figure><img src="https://i.ibb.co/NWBz3Zg/community-92647c865e99ff19673faacef8f218ff.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Connecting Community</h2>
    <p>Real people. Authentic passion</p>
  
  </div>
</div>
         <div className="card ">
  <figure><img src="https://i.ibb.co/Bwq0QCz/opportunity-32babe66c980e328bfec5e95b593ea31.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Cultivating Opportunity</h2>
    <p>Empowering HomeCooks</p>
  
  </div>
</div>
        </div>
        </div>
    );
};

export default HomeSection;

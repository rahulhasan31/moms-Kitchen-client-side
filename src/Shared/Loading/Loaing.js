import React from 'react';
import { Circles } from 'react-loader-spinner';
import './Loading.css'

const Loaing = () => {
    return (
        <div className='loader lg:ml-80'>
            <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
        </div>
    );
};

export default Loaing;
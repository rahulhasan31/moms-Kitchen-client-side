import React, { useState } from 'react';

const HomeSection = () => {

    const [menu, setMenu] = useState(false);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
         <div>
            <section>
            <div className="w-full bg-blue-100 relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family"/>
                
               
                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabIndex="0" role="img" aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"  alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p tabIndex="0" className="text-indigo-700 uppercase text-2xl mb-4">We Are Committed to your service</p>
                        <h1 tabIndex="0" className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">All Photographer </h1>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">A professional photographer may be an employee, for example of a newspaper, or may contract to cover a particular planned event such as a wedding or graduation, or to illustrate an advertisement.</p>
                        <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                            <div className="sm:flex items-center py-2">
                                <div className="flex items-center">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg" alt="icon" />
                                    <input aria-label="Photographer" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Photographer" />
                                </div>
                                <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg" alt="icon" />
                                    <input aria-label="zip code" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Zip code" />
                                </div>
                                <div className="flex items-center">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg" alt="icon" />
                                    <input aria-label="insurance" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Insurance" />
                                </div>
                            </div>
                           
                        </div> 
                    </div>
                </div>
            </div>
        </section>

          
 
        </div>
        </div>
    );
};

export default HomeSection;

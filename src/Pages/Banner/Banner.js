import React from 'react';
import img1 from '../../assets/Studio photographer-amico.png'
import img2 from '../../assets/Studio photographer-pana.png'
import img3 from '../../assets/Studio photographer-rafiki.png'
import Typewriter from 'typewriter-effect';


const Banner = () => {

    return (
        <div>
              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div data-aos="fade-down" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Welcome 
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            {/* <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg> */}
            <span className="relative"><p className='text-red-500'><Typewriter
  options={{
    strings: ['Photographer', ''],
    autoStart: true,
    loop: true,
  }}
/></p>Zone  </span>
          </span>{' '}
          
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="zoom-in-right">
              <h6 className="mb-2 font-semibold leading-5">
              Best Photographer Services
              </h6>
              <p className="text-sm text-gray-900">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequatur cum aperiam porro veritatis asperiores fuga architecto fugiat odio possimus aliquam ullam quas, praesentium molestias odit? Cupiditate mollitia eveniet eligendi!
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="zoom-in-right">
              <h6 className="mb-2 font-semibold leading-5">
              Best Photographer Services
              </h6>
              <p className="text-sm text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam eligendi voluptatum quibusdam tenetur quis illum maxime optio est maiores nihil vitae qui incidunt ducimus, vero accusamus. Minima, error repudiandae!
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="zoom-in-right">
              <h6 className="mb-2 font-semibold leading-5">
              Best Photographer Services
              </h6>
              <p className="text-sm text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse quia ea quo deleniti suscipit ullam, provident cumque nobis inventore sint sunt corporis magnam minus alias fuga animi assumenda veniam!
              </p>
            </div>
          </div>
        </div>
        <div  className="grid grid-cols-2 gap-5">
          <img data-aos="zoom-in-left"
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src={img1}
            alt=""
          />
          <img data-aos="zoom-in-left"
            className="object-cover w-full h-48 rounded shadow-lg"
            src={img2}
            alt=""
          />
          <img data-aos="zoom-in-left"
            className="object-cover w-full h-48 rounded shadow-lg"
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/Login-amico.png'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hook/UseTitle';

const Register = () => {
    useTitle('Register')
    const [showpass, setShowPass] = useState(false)
    const {createUser, updateProfileUser}= useContext(AuthContext)
    const [error, setError]= useState([])
    const navigate= useNavigate()
    const location=useLocation()
    const from= location.state?.from?.pathname || '/'

    const handleRegister=event=>{
        event.preventDefault()
        const form= event.target
        const name= form.name.value
        const photoURL= form.photoURL.value
       const email= form.email.value
       const password= form.password.value
       console.log(name, photoURL, email, password);

       createUser(email, password)
       .then(result=>{
        const user= result.user
        console.log(user);
        form.reset()
        navigate(from ,{replace: true})
        handleUpdateProfile(name, photoURL)
       
       })
       .catch(e=>{
       const msg= e.message
        setError(msg)

       })
    }

    const handleUpdateProfile=(name, photoURL)=>{

        const profile={
            displayName:name,
            photoURL: photoURL
        }
        updateProfileUser(profile)
        .then(r=>{})
        .catch(e=> console.error(e))
    }
  
    return (
        <form onSubmit={handleRegister} >
            <div className="bg-indigo-50 h-full">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center gap-8 ">
                    <div className=" md:hidden sm:mb-8 mb-6">
                        
                    </div>
                    <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Register to your account
                        </p>
                        <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                            Your have account?
                      <Link to={'/login'} className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"> Sign up here</Link>
                              
                        </p>
                       
                        
                      
                        <div>
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Name{" "}
                            </label>
                            <input id="name" name='name' aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="name " />
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                PhotoUrl{" "}
                            </label>
                            <input id="photoUrl" name='photoURL' aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Photo Url " />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Email{" "}
                            </label>
                            <input id="email" name='email'  aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Password{" "}
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input name='password' id="myInput" type={showpass ? "text" : "password"} className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div onClick={()=>setShowPass(!showpass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <div id="show">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                    <div id="hide" className="hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1={3} y1={3} x2={21} y2={21} />
                                            <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                            <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className='mb-2 text-red-700 font-medium'>{error}</p>
                            <button  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                               Register
                            </button>
                        </div>
                    </div>
                    <div className=" bg-white shadow-lg rounded xl:w-1/3   lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10  m-0  mt-3 px-2 py-6">
                        
                        <div className="flex items-start mt-8">
                          
                                
                                <img src={img} alt="" />
                          
                        </div>
                        <div className="flex items-center pl-8 mt-10">
                            
                          
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
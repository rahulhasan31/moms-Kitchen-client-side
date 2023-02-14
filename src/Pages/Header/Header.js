import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../assets/logo-p.jpg'

const Header = () => {
  const { logOut, user } = useContext(AuthContext)






  const menuItems = <>
    <li>
      <Link className='font-semibold ' to={'/'}>Home</Link>

      <Link className='font-semibold ' to={'/services'}>Services</Link>

      <Link className='font-semibold ' to={'/blog'}>Blog</Link>
    </li>
    {
      user?.uid ?
        <>
          <li>
            <Link className='font-semibold' to={'/addService'}>Add Services</Link>
          </li>
          <li>
            <Link className='font-semibold' to={'/reviews'}>My Reviews</Link>
          </li>
          <li>
            <Link to={'/login'}><button className="btn btn-ghost" onClick={logOut}>log Out</button></Link>
          </li>
        </>
        :
        <li>
          <Link className='font-semibold' to={'/login'}>Login</Link>
        </li>
    }

  </>
  return (
    <div className='mb-10'>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Moms Kitchen</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
           
          </ul>
        </div>
        <div className="navbar-end">
     {user?.uid?<>
      <div className="avatar online">
  <div className="w-11 rounded-full">
    <img src={user?.photoURL} alt="" />
  </div>
</div>
     </>:""}
        </div>
      </div>



    </div>
  );
};

export default Header;
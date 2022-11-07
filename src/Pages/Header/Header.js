import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const menuItems = <>
    <li>
      <Link className='font-semibold ' to={'/'}>Home</Link>


    </li>
    {
      user?.uid ?
      <>
      <li>
        <Link className='font-semibold' to={'/services'}>Services</Link>
      </li>
      <li>
        <Link className='font-semibold' to={'/reviews'}>My Reviews</Link>
      </li>
      <li>
        <Link  to={'/login'}><button className="btn btn-ghost" onClick={logOut}>log Out</button></Link>
      </li>
      </>
      :
      <li>
        <Link className='font-semibold' to={'/login'}>Login</Link>
      </li>
    }

  </>
    return (
        <div className='text-white'>
        <div className="navbar h-20 mb-12 pt-5 bg-gray-900 text-white shadow-lg navbar navbar-expand-lg navbar-light">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
              <img style={{ height: '40px' }} src={''} alt="" />
            </Link>
            <div>
            <Link className='font-semibold ' to={'/'}>Photographer Future</Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal p-0 ">
              {menuItems}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
          </div>
        </div>
                

      </div>
    );
};

export default Header;
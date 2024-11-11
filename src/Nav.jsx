import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className='bg-black h-15 w-screen flex justify-between'>
      <h1 className='text-2xl text-white p-2'>Redux</h1>
      <div className='flex flex-row'>
        <Link to="/"><h4 className='text-white p-3'>Home</h4></Link>
        <Link to='/data1'><h4 className='text-white p-3'>Cart</h4></Link> {/* Ensure this is correct */}
      </div>
     
    </div>
  );
};



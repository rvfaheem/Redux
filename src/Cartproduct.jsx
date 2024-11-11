import React from 'react'
import image from './images.jpeg'
import image3 from './image2.jpg'
import image2 from './images 3.jpeg'
import { increment, decrement ,deleteItem } from './Counterslice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Cartproduct = () => {
  const cart = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();
  console.log(cart)
  return (
    <div className='bg-cyan-100 h-screen'>
                  <div className='bg-black h-15 w-screen flex justify-between'>
      <h1 className='text-2xl text-white p-2'>Redux</h1>
      <div className='flex flex-row'>
        <Link to="/"><h4 className='text-white p-3'>Home</h4></Link>
        <Link to='/data1'><h4 className='text-white p-3'>Cart</h4></Link> {/* Ensure this is correct */}
      </div>
     
    </div>
      <p className='text-[28px] font-bold mt-10 text-center'>Your cart</p>
      <div className='flex flex-wrap justify-center mt-16'>
        <table className='border-2 border-black w-72'>
          <thead>
            <tr className='border-2 border-black'>
              <th className='underline'>Product</th>
              <th className='underline'>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {cart.map((item, index) => (
              <tr key={index} className='border-2 border-black'>
                <td>
                  <img src={item.img} alt={item.name} className='w-20' />
                  <p>{item.name}</p>
                </td>
                <td className='text-center'>{item.quantity}</td>
                <td>
                  
                  <button
                    className='bg-[#FFC107] text-white px-4 py'
                    onClick={() => dispatch(increment(item.id))}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className='bg-[#FFC107] text-white px-4 py'
                    onClick={() => dispatch(decrement(item.id))}
                  >
                    -
                  </button>
                </td>
                <td>
                  {/* <button
                    className='bg-red-500 text-white px-4 py-1'
                    onClick={() => dispatch(deleteItem(item.id))}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}






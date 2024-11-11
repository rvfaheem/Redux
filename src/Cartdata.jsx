import React from 'react';
import image from './images.jpeg';
import image3 from './image2.jpg';
import image2 from './images 3.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './Counterslice';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'phone1', price: 1000, img: image },
  { id: 2, name: 'phone2', price: 2000, img: image3 },
  { id: 3, name: 'phone3', price: 3000, img: image2 },
];

export const Cartdata = () => {
  const data = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();

  return (
    <div className='bg-cyan-100 h-screen'>
            <div className='bg-black h-15 w-screen flex justify-between'>
      <h1 className='text-2xl text-white p-2'>Redux</h1>
      <div className='flex flex-row'>
        <Link to="/"><h4 className='text-white p-3'>Home</h4></Link>
        <Link to='/data1'><h4 className='text-white p-3'>Cart</h4></Link> {/* Ensure this is correct */}
      </div>
     
    </div>
      <p className='text-[28px] font-bold p-5 text-center '>Mobile Phones</p>
      
        {/* <p className='text-center mb-5 hover:text-'>Click here for cart</p> */}
      
      <div className='flex flex-wrap justify-evenly p-5'>
        {products.map((product) => (
          <div key={product.id} className='w-32 h-44 bg-black flex items-baseline rounded flex-wrap justify-center'>
            <img src={product.img} alt={product.name} className='w-24 rounded mt-3' />
            {/* <button
              className='text-white'
              onClick={() => dispatch(addData({ name: product.name, price: product.price, img: product.img }))}
            >
              Add to cart
            </button> */}
            <button
  className='text-white'
  onClick={() => dispatch(addData({
    id: product.id, // Add id here
    name: product.name,
    price: product.price,
    img: product.img
  }))}
>
  Add to cart
</button>
          </div>
        ))}
      </div>
      <data1 />
    </div>
  );
};

export default Cartdata;


import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from './redux/actions';


export default function Cart() {
  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  
  return (
    <>
    <div className='container'>
        <div className='bg-light p-5 my-5 rounded-3'>
          <button className='btn-close float-end m-0 p-0' aria-label='Close'></button>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-4'>
              <img src='' alt='Product Image'/>
            </div>
            <div className='col-md-4 text-center'>
              <h3>Title</h3>
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
       
    </>
  )
}

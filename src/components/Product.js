import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addCart} from './redux/actions';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    

    useEffect(() => {

        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            
        }


        getProduct();

    })

    
    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }


    return (
        <>

        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height={400} width={400}/>
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder '>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-5 fw-bold my-4 '>${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button onClick={()=> addProduct(product)} className='btn btn-outline-dark me-2 px-4 py-2'>Add To Cart</button>
                    <Link to="/cart">
                    <button className='btn btn-dark px-3 py-2'>Go To Cart</button>
                    </Link>
                </div>
            </div>
        </div>
            
        </>
    )
}

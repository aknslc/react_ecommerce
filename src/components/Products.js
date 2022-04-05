import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Products() {

    // useState variables
    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState(data);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        Store();

    }, [])



    // calling api with fetch from Fake Store
    const Store = async () => {
        const response = await fetch('https://fakestoreapi.com/products/');
        const JsonData = await response.json();
        setDataFilter(JsonData);
        setData(JsonData);
    }

    // product filtering function
    const filterProduct = (cat) => {
        // category comparison
        const updatedList = data.filter((x) => cat === x.category);
        setDataFilter(updatedList);
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center my-3 p-3'>Products</h1>
                <hr />
                <div className='buttons text-center'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setDataFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                <div className='row'>
                    {dataFilter.map((product => {
                        // const cartItem = cart.find(item => item.id === product.id);

                        // Add product to cart
                        const addCart = () => {

                            const checkCart = cart.find(item => item.id === product.id);
                            // Product already added
                            if (checkCart) {
                                checkCart.amount += 1;
                                checkCart.price += product.price;
                                setCart([...cart.filter(item => item.id !== product.id), checkCart]);

                            } else {
                                setCart([...cart, {
                                    id: product.id,
                                    amount: 1,
                                    title: product.title,
                                    price: product.price,
                                    image: product.image
                                }]);

                            }
                        }
                        return (
                            <>
                                <div className='col-lg-3 col-md-6 col-sm-12 p-4' key={product.id}>
                                    <div className="card text-center h-100">
                                        <img src={product.image} height={300} className="card-img-top p-4" alt="product" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.substring(0, 15)}...</h5>
                                            <p className="card-text m-0 pb-3">${product.price}</p>
                                            <Link to={`/products/${product.id}`}>
                                                <button onClick={addCart} className="btn btn-outline-dark">Buy Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}

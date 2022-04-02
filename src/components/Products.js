import React, { useState, useEffect } from 'react'

export default function Products() {

    // useState variables
    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState(data);

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
                <h1 className='text-center my-2'>Products</h1>
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
                        return (
                            <>
                                <div className='col-3 p-4'>
                                    <div className="card text-center h-100" key={product.id}>
                                        <img src={product.image} height={300} className="card-img-top p-4" alt="product" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.substring(0, 15)}...</h5>
                                            <p className="card-text">${product.price}</p>
                                            <button className="btn btn-outline-dark">Buy Now</button>
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

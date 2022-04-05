import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Navbar() {

    const state = useSelector((state) => state.handleCart);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-3 sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand fs-2">aknselc</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link" >Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a className='btn btn-outline-dark me-2'>
                                <i className="fa fa-sign-in me-1" aria-hidden="true"></i>Login
                            </a>
                            <a className='btn btn-outline-dark me-2'>
                                <i className="fa fa-user-plus me-1" aria-hidden="true"></i>Register
                            </a>
                            <Link to='/cart' className='btn btn-outline-dark me-2'>
                                <i className="fa fa-cart-arrow-down me-1" aria-hidden="true"></i>Cart({state.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

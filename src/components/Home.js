import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero mb-5 p-1'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/img/bg-hero.jpg" className="card-img" alt="hero image" height={750}/>
            </div>
            <Products/>
        </div>
        
    )
}

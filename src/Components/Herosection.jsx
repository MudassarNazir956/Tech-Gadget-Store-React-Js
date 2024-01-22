import React from 'react'
import image from './Images/01.jpg'
import { Link } from 'react-router-dom'

const Herosection = () => {
  return (
    <>
     <div className="relative">
        <img src={image}  alt="image" className="w-full h-screen object-cover" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white XXsm:mt-1">
            <h1 className="text-4xl font-bold mb-1 md:mt-16 sm:mt-16 italic">Welcome to Tech Gadget Store</h1>
            <p className="text-lg text-center font-semibold md:mt-16 XXsm:mt-3">
            Discover the latest and greatest in technology at our gadget store. 
            From cutting-edge smartphones to innovative smart home devices, 
            we've got everything you need to stay connected and make life easier.
            </p>
            <button className="bg-blue-800 hover:bg-blue-900 hover:px-3 hover:font-semibold text-white font-bold py-2 px-4 md:mt-16 sm:mt-16 rounded XXsm:mt-3">
                    <Link to="/cart">
                    Shop Now
                    </Link>
            </button>
        </div>
        </div>

    </>
  )
}

export default Herosection

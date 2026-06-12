import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} alt="" className='mb-52-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem.
                </p>
            </div>

            <div>

              <p className='text-x1 font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'> 
                <a href="/"><li>Home</li></a>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy</li>
              </ul>
      
            </div>

            <div>
              <p className='text-xl font-medium mb-5'>Get In Touch</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8091736810</li>
                <li>dev@email.com</li>
              </ul>
            </div>

        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ Forever.com All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
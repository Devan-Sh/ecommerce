import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
        <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={'US'}></Title>
        </div>

        <div className='my10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p className='text-gray-500'>Dussehra Ground <br /> Baddi</p>
              <p className='text-gray-500'>Phone: +91 8091736810 <br /> Email: dev@email</p>
              <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
              <p className='text-gray-500'>Learn more about our teams and job Openings.</p>
              <button className='cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
            </div>
        </div>

        <NewsletterBox></NewsletterBox>

    </div>
  )
}

export default Contact
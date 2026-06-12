import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati, a alias reiciendis fugit autem repellat adipisci inventore nesciunt eum consequuntur dolorum. Magni, pariatur atque?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sit exercitationem magni sint odio ullam atque, rem quaerat optio debitis eveniet eaque expedita quod at fugiat. Eos iure nesciunt reprehenderit?
          Reprehenderit maiores aperiam tempora quasi assumenda, eligendi a consequatur provident veniam molestiae dolore autem facilis facere! Voluptas obcaecati ratione doloribus corporis deserunt sequi totam facilis, ad omnis numquam ea illum.
          Reiciendis illo tempora, inventore dicta enim fugit eius recusandae, repudiandae doloremque sapiente perferendis nesciunt delectus ducimus. Perferendis iste voluptatibus eius consectetur modi dolores error, veritatis impedit eligendi reiciendis magni at?.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem facilis dolorum dignissimos aliquid dolor.</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quidem temporibus, consectetur quod vero quas unde ipsum placeat reprehenderit soluta earum porro culpa vitae cumque? Magnam ab eos ad vel, error mollitia esse architecto asperiores!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quidem temporibus, consectetur quod vero quas unde ipsum placeat reprehenderit soluta earum porro culpa vitae cumque? Magnam ab eos ad vel, error mollitia esse architecto asperiores!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quidem temporibus, consectetur quod vero quas unde ipsum placeat reprehenderit soluta earum porro culpa vitae cumque? Magnam ab eos ad vel, error mollitia esse architecto asperiores!</p>
        </div>
      </div>

      <NewsletterBox></NewsletterBox>

    </div>
  )
}

export default About
import React from 'react'
import Title from './../components/Title';
import { assets } from "../assets/assets"
import NewsLetterBox from './../components/NewsLetterBox';
function About() {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT '} text2={' US'} />

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full  md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
          <p className='text-gray-600'>Forever is a major Indian e-commerce company that started as an online bookstore in 2007 and is now a leading marketplace for a wide range of products like electronics, fashion, and groceries. Founded by Sachin and Binny Bansal, it is headquartered in Bengaluru, with Walmart acquiring a majority stake in 2018. Flipkart is known for innovations like Cash on Delivery and easy returns and has expanded through acquisitions like Myntra and Cleartrip.</p>
          <p className='text-gray-600'>The service competes primarily with Amazon India and domestic rival Snapdeal.[8][9] As of FY23, Flipkart held a 48% market share in the Indian e-commerce industry.[10] Flipkart has a dominant position in the apparel segment, bolstered by its acquisition of Myntra, and was described as being "neck and neck" with Amazon in the sale of electronics and mobile phones.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className='text-gray-600'>Forever's mission is to revolutionize Indian shopping by building a customer-centric, accessible, and affordable ecosystem of products and services through technology, while also empowering sellers and partners to grow their businesses. </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={' CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>The Forever Assured Badge provides multiple advantages, including guaranteed quality, quick shipping, and free delivery on orders over ₹500. It enhances customer trust, boosts product visibility, and delivers value to both buyers and sellers</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>It offers unmatched convenience of quick shopping and fast delivery, aligning with today's fast-paced lifestyle. You can easily pick your everyday essentials on the Flipkart app and get them delivered to your doorstep.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>The Forever Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more.</p>
        </div>

      </div>
      <NewsLetterBox />
    </div>

  )
}

export default About

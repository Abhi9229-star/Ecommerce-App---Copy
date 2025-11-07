import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

function Product() {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const fetchProductsData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductsData()

  }, [productId])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                < img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5"
            />
            <img src={assets.star_icon} alt="" className="w-3 5"
            />
            <img src={assets.star_icon} alt="" className="w-3 5"
            />
            <img src={assets.star_icon} alt="" className="w-3 5"
            />
            <img src={assets.star_dull_icon} alt="" className="w-3 5"
            />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index} > {item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
            <p>100% Original Product</p>
            <p>Cash on Delivery is Available on this Product</p>
            <p>Easy return and exchange policy within 7 days</p>

          </div>
        </div>
      </div>
      {/* ----------Descriptipon and review section ------ */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'> Review(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is a digital platform that enables the online buying and selling of products and services, functioning as a virtual store with features like product catalogs, shopping carts, and payment processing systems. It allows businesses to reach a global market, offering customers 24/7 access to browse, select, and purchase items from anywhere with an internet connection.
            Key characteristics and functions:
            Digital Storefront: It serves as the online equivalent of a physical store, displaying products or services.
            Online Transactions: It facilitates the entire process of buying and selling, from browsing to making payments.
            Product & Service Offerings: E-commerce websites can sell a wide variety of goods, including physical products, digital products, and services.
            Accessibility: Customers can access the website and make purchases at any time, regardless of location, as long as they have internet access.
            Essential Features: Common features include:
            Product Catalogs: To showcase available products.
            Shopping Carts: For users to collect items they wish to purchase.
            Payment Processing: To securely accept payments from customers.
            Customer Service Tools: To manage customer interactions and support.
            Company Information: Such as contact details and company history.
            Examples:
            Large online retailers like Amazon.com and Walmart.com are popular examples of e-commerce websites.
            Businesses can also create their own niche online stores for specific products like clothing, electronics, or home goods.
            How to Build an Ecommerce Website | Mailchimp
            13 May 2021 — A website that allows people to buy and sell physical goods, services, and digital products over the internet rather th...

            Mailchimp

            What is an eCommerce website and why do you need one - Wix.com
            18 Aug 2025 — An e-commerce website, simply put, is an online store. It's a platform where goods and services are traded between buye...

            Wix.com

            What is ecommerce? Definition, types, examples, benefits
            28 Aug 2025 — What is an e-commerce website? An e-commerce website is a digital platform that facilitates online transactions between...

            The Future of Commerce

            Show all
          </p>
          <p>An e-commerce website is a digital platform that enables the online buying and selling of products and services, functioning as a virtual store with features like product catalogs, shopping carts, and payment processing systems. It allows businesses to reach a global market, offering customers 24/7 access to browse, select, and purchase items from anywhere with an internet connection.</p>
        </div>
      </div>
      {/* --------- Related Products----------*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div >
  ) : <div className='opacity-0'></div>
}

export default Product

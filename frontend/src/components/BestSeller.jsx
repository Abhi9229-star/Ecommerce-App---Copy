import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import ProductsItem from './ProductsItem'
import Title from './Title'

function BestSeller() {
  const { products } = useContext(ShopContext)
  const [bestseller, setBestSeller] = useState([])
  useEffect(() => {
    // console.log("All products:", products)
    const bestProduct = products.filter((item) => (item.bestseller === true))
    console.log("Best Seller Products:", bestProduct)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST '} text2={'SELLER'}> </Title>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>lorem lumpsum is simply dummy of the printing and typesetting industry.</p>
      </div>
      { /* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-col-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {

          bestseller.map((item, index) => (
            < ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }




      </div>

    </div >
  )
}

export default BestSeller

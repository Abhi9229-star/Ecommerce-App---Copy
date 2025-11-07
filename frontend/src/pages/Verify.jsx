import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from 'axios';
function Verify() {

  const { navigate, token, setCartItems, backendUrl, cartItems } = useContext(ShopContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      if (!token) {
        navigate('/cart')
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/verifystripe', {
        success, orderId

      }, { headers: { token } })
      console.log(response.data.success)

      if (response.data.success === true) {
        setCartItems({})
        toast.success('Payment successful!')
        navigate('/orders')
      } else {

        navigate('/cart')
        toast.error('Payment failed. Please try again.')
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      navigate('/cart')

    }
  }
  useEffect(() => {
    verifyPayment()

  }, [token])
  return (
    <div>

    </div>
  )
}

export default Verify;

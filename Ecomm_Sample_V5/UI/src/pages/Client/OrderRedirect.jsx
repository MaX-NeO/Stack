import React from 'react'
import { useNavigate } from 'react-router-dom'
import CompletedSVG from '../../assets/ico/completed.webp';
const OrderRedirect = () => {
  const navigate = useNavigate()
  setTimeout(()=>{
      navigate('/user/dashboard')
  },3000)
  return (
    <>

      <div className="success-animation">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx={26} cy={26} r={25} fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      </div>
      <div>
        <p className='order-message green' >
          Order Confirmed !
        </p>
      </div>
      <div className='order-svg'>
        <img src={CompletedSVG} alt="login-img" className='auth-svg' />
      </div>
    </>
  )
}

export default OrderRedirect
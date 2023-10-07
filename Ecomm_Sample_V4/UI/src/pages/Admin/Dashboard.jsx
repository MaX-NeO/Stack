import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { getProductCount, getFeedbacktCount,getUserCount, getOrderCount } from '../../service/api';
// import { getProductCount, getUserCount, getOrderCount } from '../../service/api';
import Feedback from '../Client/Feedback';

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);
  let fdc = 10
  let odc = 10
  let pdc= 10
  let ouc = 10
  const getCount = async () => {

    try {
      const [productsData, userData, ordersData] = await Promise.all([
        // getProductCount(),
        // getFeedbacktCount(),
        // getUserCount(),
        // getOrderCount()
      ]);
      // setProducts(productsData.data)
      // setFeedbacks('20')
      // setUsers(userData.data)
      // setOrders(ordersData.data)
      console.log(productsData.data)
      console.log(userData.data)
      console.log(ordersData.data)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCount()
  }, [])

  return (
    <>
      <Layout />
      <div className='mainx'>
        <div className='card-container'>
          <div className='card shadow'>
            <div className='card-header'>
              {ouc}
            </div>
            <div className='card-footer'>
              Users
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-header'>
              {pdc}
            </div>
            <div className='card-footer'>
              Products
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-header'>
              {odc}
            </div>
            <div className='card-footer'>
              Orders
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-header'>
              {fdc}
            </div>
            <div className='card-footer'>
              Feedbacks
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
export default Dashboard;
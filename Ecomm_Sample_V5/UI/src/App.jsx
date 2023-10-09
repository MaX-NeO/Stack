import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Feedback from './pages/Client/Feedback'
import Home from './pages/Client/Home'
import Dashboard from './pages/Admin/Dashboard'
import ViewFeedbacks from './pages/Admin/Feedback/ViewFeedbacks'
import EditProduct from './pages/Admin/Product/EditProduct'
import AddProduct from './pages/Admin/Product/AddProduct'
import ViewProducts from './pages/Admin/Product/ViewProducts'
import ViewUsers from './pages/Admin/User/ViewUsers'
import EditUser from './pages/Admin/User/EditUser'
import Products from './pages/Client/Products';
import Login from './pages/Client/Login'
import Register from './pages/Client/Register'
import UserPanel from './pages/Client/UserPanel'
import { Privacy } from './pages/etc/Privacy'
import { Terms } from './pages/etc/Terms'
import { Cart } from './pages/Client/Cart'
import { Settings } from './pages/Client/Settings'
import Checkout from './pages/Client/Checkout'
import OrderRedirect from './pages/Client/OrderRedirect'
import Error404 from './pages/Error/Error404';
import { FAQ } from './pages/etc/FAQ'
import { UserAuth } from './pages/Client/Auth/UserAuth'
import {AdminAuth} from './pages/Admin/Auth/AdminAuth'
import Orders from './pages/Client/Orders'
const App = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />

        <Route exact path='/feedback' element={<Feedback />} />
        <Route exact path='/privacy' element={<Privacy />} />
        <Route exact path='/terms' element={<Terms />} />
        <Route exact path='/faq' element={<FAQ />} />

        <Route path='*' element={<Error404 />} />


        <Route element={<UserAuth />}>
          <Route exact path="/user/dashboard" element={<UserPanel />} />
          <Route exact path="/user/orders" element={<Orders />} />
          <Route exact path='/user/settings' element={<Settings />} />
          <Route exact path='/user/checkout' element={<Checkout />} />
          <Route exact path='/user/order/success' element={<OrderRedirect />} />
        </Route>


        <Route element={<AdminAuth />}>
          <Route exact path='/admin/dashboard' element={<Dashboard />} />
          <Route exact path='/admin/products/view' element={<ViewProducts />} />
          <Route exact path='/admin/product/add' element={<AddProduct />} />
          <Route exact path='/admin/product/edit/:productId' element={<EditProduct />} />
          <Route exact path='/admin/user/view' element={<ViewUsers />} />
          <Route exact path='/admin/user/edit/:userId' element={<EditUser />} />
          <Route exact path='/admin/feedbacks/view' element={<ViewFeedbacks />} />
        </Route>

      </Routes>
    </>
  )
}
export default App;
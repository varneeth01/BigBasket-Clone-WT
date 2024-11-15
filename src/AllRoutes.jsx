import PageNotFound from './Component/Pages/PageNotFound'
import Dashoboard from './Component/Pages/Dashoboard'
import AdminPanel from './Component/Pages/Admin/AdminPanel'
import Products from './Component/Pages/Products'
import MyOrders from './Component/Pages/MyOrders'
import { Routes, Route } from 'react-router-dom'
import Contact from './Component/Pages/Contact'
import Login from './Component/Pages/Login'
import Cart from './Component/Pages/Cart'
import PrivateRoute from './PrivateRoute';
import React from 'react'
import AdminDashboard from './Component/Pages/Admin/AdminDashboard'
const AllRoutes = () => {

     return (
          <Routes>
               <Route path='/' element={<Dashoboard />} />
               <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
               <Route path='/login' element={<Login />} />
               <Route path='/admin/*' element={<AdminPanel />} />
               <Route path='/myorders' element={<PrivateRoute><MyOrders /></PrivateRoute>} />
               <Route path='/products/:id' element={<Products />} />
               <Route path='/contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
               <Route path='*' element={<PageNotFound />} />
               {/* <Route path='/Admin' element={<AdminDashboard></AdminDashboard>} /> */}
          </Routes>
     )
}

export default AllRoutes
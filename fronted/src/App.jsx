import React from 'react'
import HomePage from './landing_page/home/HomePage'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom"
import AboutPage from './landing_page/about/AboutPage'

import PricingPage from './landing_page/pricing/PricingPage'
import Signup from './landing_page/signup/Signup'
import SupportPage from './landing_page/support/SupportPage'
import ProductPage from './landing_page/products/ProductPage'
import NotFound from './landing_page/NotFound'
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    },
    {
      path:'/pricing',
      element:<PricingPage/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/products',
      element:<ProductPage/>
    },
    {
      path:'/support',
      element:<SupportPage/>
    },
    {
      path:'*',
      element:<NotFound/>
    },

  ])
  return (
    <>
      <RouterProvider router={appRouter} />
      
    </>
  )
}

export default App
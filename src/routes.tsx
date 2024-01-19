import { createBrowserRouter } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Payment } from './pages/Payment'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '/cart/payment', element: <Payment /> },
])

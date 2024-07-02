import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  element : <App />,
  children : [
    {
      path:"/",
      element : <Home />
    },
    {
      path:"/about",
      element : <About />
    },
    {
      path:"/products",
      element : <Products />
    },
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import ErrorPage from './components/pages/Error.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import Resume from './components/pages/Resume.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';


//defined routes
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path:'portfolio',
          element: <Portfolio/>
        },
        {
          path:'resume',
          element: <Resume/>
        },
        {
          path:'contact',
          element: <Contact/>
        }
      ],
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

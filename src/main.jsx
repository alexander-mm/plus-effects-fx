import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import EspumaOne from './pages/EspumaOne'
import Maquinas from './pages/Maquinas'
import Insumos from './pages/Insumos'
import Bidon from './componentsItems/Bidon'
import Aditivo from './componentsItems/Aditivo'
import AditivoX6 from './componentsItems/AditivoX6'
import KitBombeo from './componentsItems/KitBombeo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/maquinas',
        element: <Maquinas />
      },
      {
        path: '/insumos&accs',
        element: <Insumos />
      },
    ],
  },
  {
    path: '/espumaone',
    element: <EspumaOne />
  },
  {
    path: '/bidon',
    element: <Bidon />
  },
  {
    path: '/aditivo',
    element: <Aditivo />
  },
  {
    path: '/aditivox6',
    element: <AditivoX6 />
  },
  {
    path: '/kitbombeo',
    element: <KitBombeo />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

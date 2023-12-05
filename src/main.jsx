import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from './routes/Home'
import Maquinas from './routes/Maquinas'
import EspumaOne from './routes/EspumaOne'
import Insumos from './routes/Insumos'
import Bidon from './routes/Bidon'
import Aditivo from './routes/Aditivo'
import AditivoX6 from './routes/AditivoX6'
import KitBombeo from './routes/KitBombeo'
import Buildpage from "./routes/Buildpage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
  {
    path: '/buildpage',
    element: <Buildpage />
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
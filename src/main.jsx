import * as React from "react";
import { Suspense } from 'react';
import * as ReactDOM from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
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
import UserManual from "./routes/UserManual";

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
  {
    path: '/usermanual',
    element: <UserManual />
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading..."> {/* Aquí utilizamos Suspense */}
        <RouterProvider router={router} />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);
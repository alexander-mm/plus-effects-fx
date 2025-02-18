import * as React from "react";
import { Suspense } from 'react';
import * as ReactDOM from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from './routes/Home'
import Machines from './routes/Machines'
import EspumaOne from './routes/EspumaOne'
import EspumaNeo from './routes/EspumaNeo'
import Supplies from './routes/Supplies'
import FluidContainer from './routes/FluidContainer'
import EspumaColor from './routes/EspumaColor'
import EspumaColorSix from './routes/EspumaColorSix'
import PumpKit from './routes/PumpKit'
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
        path: '/machines',
        element: <Machines />
      },
      {
        path: '/supplies',
        element: <Supplies />
      },

      {
        path: '/usermanual',
        element: <UserManual />
      },
    ],
  },
  {
    path: '/espumaone',
    element: <EspumaOne />
  },
  {
    path: '/espumaneo',
    element: <EspumaNeo />
  },

  {
    path: '/fluidcontainer',
    element: <FluidContainer />
  },
  {
    path: '/espumaColor',
    element: <EspumaColor />
  },
  {
    path: '/espumacolorsix',
    element: <EspumaColorSix />
  },
  {
    path: '/pumpkit',
    element: <PumpKit />
  },
  {
    path: '/buildpage',
    element: <Buildpage />
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
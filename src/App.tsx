import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Root from './routes/root.tsx';
import Index from "./routes/index";
import ErrorPage from "./error-page";
import Watch from './components/Watch.tsx';
import { BASE_PATH } from './constants';
import { atom } from 'jotai';

export const queryOrg = atom<string>("Hololive")

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "watch/:id",
        element: <Watch />,
      },
    ],
  },

],
  { basename: BASE_PATH });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

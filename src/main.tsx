import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes/Index'
import Character from './routes/Character'
import './styles/main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Characters from './routes/Characters'
import Adventures from './routes/Adventures'
import ErroHandler from './routes/ErrorHandler'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
  {
    path: "/adventures",
    element: <Adventures />,
  },
  {
    path: "*",
    element: <ErroHandler />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

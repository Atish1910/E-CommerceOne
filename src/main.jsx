import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {path : "", element : <App></App>, children : [
  {path : "/", element : <Home ></Home>},
  {path : "/clothes", element : <Home category="clothes"></Home>},
  {path : "/shoes", element : <Home category="shoes"></Home>},
  {path : "/furniture", element : <Home category="furniture"></Home>},
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)

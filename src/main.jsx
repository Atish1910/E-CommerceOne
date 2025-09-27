import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {path : "", element : <App></App>, 
  children : [
    {path : "/", element : <Home ></Home>},
    {path : "/clothes", element : <Home category="clothes"></Home>},
    {path : "/nueva-categoria", element : <Home category="nueva-categoria"></Home>},
    {path : "/furniture", element : <Home category="furniture"></Home>},
    {path : "/about", element : <About></About> },
    {path : "*", element : <NotFound></NotFound>}
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)

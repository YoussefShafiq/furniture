import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/images/SkinClinic.png'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Notfound from './components/NotFound/Notfound'
import WOW from 'wow.js';
import 'animate.css';


let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '*', element: <Notfound /> }
    ]
  }
])



function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
  }, []);

  return (
    <>
      <div className=" m-auto">
        <RouterProvider router={routers} ></RouterProvider>
      </div>
    </>
  )
}

export default App

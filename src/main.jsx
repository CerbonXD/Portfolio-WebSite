import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Contact from './pages/Contact.jsx';
import Resume from "./pages/Resume.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
          {index: true, element: <Home/>},
          {path: "about", element: <About/>},
          {path: "projects", element: <Projects/>},
          {path: "resume", element: <Resume/>},
          {path: "contact", element: <Contact/>},
          {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)

document.body.classList.toggle("dark")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

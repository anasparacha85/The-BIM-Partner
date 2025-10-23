import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Router, Route } from 'react-router-dom'
import Home1 from './pages/Home1.jsx'
import Contact from './pages/Contact.jsx'
import ServicesPage from './pages/Services.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ServiceDetails from './pages/ServiceDetails.jsx'
import Blogs from './pages/Blogs.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import BimTraining from './pages/BimTraining.jsx'
import CareerPage from './pages/Career.jsx'
import BIMStaffingPage from './pages/BIMStaffingPage.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Home1/>}/>
     <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
         <Route path='/services/:slug' element={<ServiceDetails/>}/>
          <Route path="/blogs/:slug" element={<Blogs />} />
        {/* default route */}
        <Route path="/blogs" element={<Blogs />} />
          <Route path='/about' element={<AboutUsPage/>}/>
            <Route path='/training' element={<BimTraining/>}/>
               <Route path='/staffing' element={<BIMStaffingPage/>}/>
              <Route path='/career' element={<CareerPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)

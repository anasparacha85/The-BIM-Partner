import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Router, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Eager load critical routes (Home, About)
import Home1 from './pages/Home1.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'

// Lazy load non-critical routes for code splitting
const Contact = lazy(() => import('./pages/Contact.jsx'))
const ServicesPage = lazy(() => import('./pages/Services.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const ServiceDetails = lazy(() => import('./pages/ServiceDetails.jsx'))
const Blogs = lazy(() => import('./pages/Blogs.jsx'))
const BimTraining = lazy(() => import('./pages/BimTraining.jsx'))
const CareerPage = lazy(() => import('./pages/Career.jsx'))
const BIMStaffingPage = lazy(() => import('./pages/BIMStaffingPage.jsx'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
)

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Home1/>}/>
     <Route path='/contact-us' element={<Suspense fallback={<LoadingFallback />}><Contact/></Suspense>}/>
      <Route path='/services' element={<Suspense fallback={<LoadingFallback />}><ServicesPage/></Suspense>}/>
         <Route path='/services/:slug' element={<Suspense fallback={<LoadingFallback />}><ServiceDetails/></Suspense>}/>
          <Route path="/blogs/:slug" element={<Suspense fallback={<LoadingFallback />}><Blogs /></Suspense>} />
        {/* default route */}
        <Route path="/blogs" element={<Suspense fallback={<LoadingFallback />}><Blogs /></Suspense>} />
          <Route path='/about-us' element={<AboutUsPage/>}/>
            <Route path='/bim-training' element={<Suspense fallback={<LoadingFallback />}><BimTraining/></Suspense>}/>
               <Route path='/bim-staffing' element={<Suspense fallback={<LoadingFallback />}><BIMStaffingPage/></Suspense>}/>
              <Route path='/career' element={<Suspense fallback={<LoadingFallback />}><CareerPage/></Suspense>}/>
        <Route path='*' element={<Suspense fallback={<LoadingFallback />}><NotFoundPage/></Suspense>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <RouterProvider router={router}/>
  </HelmetProvider>
  </StrictMode>,
)

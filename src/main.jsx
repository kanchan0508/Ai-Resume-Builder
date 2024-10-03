import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home.jsx'
import Dashboard from './dasboard/Dashboard.jsx'
import Signin from './Auth/SignIn-Up.jsx'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/auth/sign-in",
    element: <Signin />

  },
  
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
   <RouterProvider router={router} />
   </ClerkProvider>
  </StrictMode>,
)

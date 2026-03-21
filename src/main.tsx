import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Loginpage from './pages/loginpage.tsx'
import Homepage from './pages/homepage.tsx'
import Registerpage from './pages/registerpage.tsx'
import { AuthProvider } from './features/auth/contexts/AuthContext.tsx'

const router = createBrowserRouter(
	[
		{
			path: '/',
			Component: App,
			children: [
				{
						index: true,
						Component: Homepage
				},
				{
					path: 'login',
					Component: Loginpage,
				},
				{
					path: 'register',
					Component: Registerpage
				}
			]
		}
	]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<AuthProvider>
    <RouterProvider router={router}/>
		</AuthProvider>
  </StrictMode>,
)


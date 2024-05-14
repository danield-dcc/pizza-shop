import './global.css'

import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <Toaster richColors />
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  )
}

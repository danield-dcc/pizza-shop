import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

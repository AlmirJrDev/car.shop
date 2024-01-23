import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <HelmetProvider>
        <Helmet titleTemplate="%s | car.shop" />
        <RouterProvider router={router} />
    </HelmetProvider>
     
    </ThemeProvider>
  )
}

import { Helmet, HelmetProvider } from 'react-helmet-async'



import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartProvider'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <HelmetProvider>
        <CartContextProvider>
       
        <Helmet titleTemplate="%s | car.shop" />
        <Header />
        <Outlet />
        </CartContextProvider>
    </HelmetProvider>
     
    </ThemeProvider>
  )
}

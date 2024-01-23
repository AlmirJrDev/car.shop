import { Helmet } from 'react-helmet-async'

import {
  Truck,
  ShieldCheck,
  ShoppingCart,
  Wrench,


} from '@phosphor-icons/react'

import {
  CarList,
  Heading,
  Hero,
  HeroContent,
  Info,
} from './styles'

import { useTheme } from 'styled-components'
import { Header } from '../../components/Header'
export function Home() {
  const theme = useTheme()
  return (
    <div>
      <Header/>
      <Hero>
        <HeroContent>
        <Helmet title="Home" />
          <img src="/images/carhome.svg" alt="car.shop car home" />
          <div>
            <Heading>
              <h1>car.shop &copy;</h1>

              <span>
                Conduza seu estilo, encontre seu caminho: Seu destino automotivo
                começa aqui!
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Segurança no comprar</span>
              </div>

              <div>
                <Truck
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Entrega no prazo e com cuidado</span>
              </div>

              <div>
                <Wrench
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Revisação completa</span>
              </div>

              <div>
                <ShieldCheck
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Seguro de 1 ano</span>
              </div>
            </Info>
          </div>
        </HeroContent>
      </Hero>

      <CarList>
        <h2>Nosso catálogo</h2>

     

        <div>
          
        </div>
      </CarList>
    </div>
  )
}

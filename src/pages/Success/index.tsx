import { Helmet } from 'react-helmet-async'

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { Container, Heading, Info, InfoContent, Order } from './styles'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }

  return (

    <Container>
        <Helmet title="Pagamento" />
      <Order>
        <Heading>
          <h2>Pedido em preparo!</h2>
          <span>
            Seu caminho ganhou uma nova dimensão! Aguarde ansiosamente a chegada
            do seu novo carro, onde cada quilômetro será uma jornada de
            elegância e performance inigualáveis.
          </span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.green }}
                size={32}
              />

              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.green }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>2 dias úteis</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.green }}
                size={32}
              />

              <div>
                <span>Pagamento na agencia mais proxima no metodo:</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <video src="/images/cars/carfinished.mp4" loop autoPlay></video>
    </Container>
    
      
    
  )
}

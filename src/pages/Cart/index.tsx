import { Helmet } from 'react-helmet-async'

import {
 
  CurrencyDollar,
  MapPin,
 
} from '@phosphor-icons/react'

import {
  AddressContainer,
  AddressForm,
  AddressHeading,

  Container,
  InfoContainer,
  PaymentContainer,

  PaymentHeading,
  PaymentOptions,
} from './styles'


import { TextInput } from '../../components/Form/TextInput'
export function Cart() {
  return (
    <>
      <Helmet title="Carrinho" />
      <h1>Carrinho</h1>

      <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order" >
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
             

            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Carrinho</h2>

        
      </InfoContainer>
    </Container>
    </>
  )
}

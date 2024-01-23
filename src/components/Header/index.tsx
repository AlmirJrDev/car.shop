import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Aside, Container } from './styles'

export function Header() {


  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="car.shop" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Joinville, SC</span>
        </div>

        <Link to={`cart`} >
          <ShoppingCart size={22} weight="fill" />
          
        </Link>
      </Aside>
    </Container>
  )
}

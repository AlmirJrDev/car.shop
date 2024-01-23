import { ShoppingCart } from '@phosphor-icons/react'



import {
  CarImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  car: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ car }: Props) {



  return (
    <Container>
      <CarImg src={car.image} alt={car.title} />

      <Tags>
        {car.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{car.title}</Title>

      <Description>{car.description}</Description>

      <Control>
        <Price>
          <span>
            {' '}
            {new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(car.price)}
          </span>
        </Price>

        <Order>
          <Link
            to={`cart`}
          
          >
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </Link>
        </Order>
      </Control>
    </Container>
  )
}

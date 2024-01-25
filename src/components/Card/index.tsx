import { ShoppingCart } from '@phosphor-icons/react'

import { useState } from 'react'

import { useCart } from '../../hooks/useCart'

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
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem, cart } = useCart()

  function handleAddItem() {
    addItem({ id: car.id, quantity })
    setIsItemAdded(true)
    setQuantity(0)
  }


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

        <Order $itemAdded={isItemAdded}>
          <Link
            to={`cart`}
            aria-disabled={cart.length === 0}
            onClick={handleAddItem}
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

import {
  Truck,
  ShieldCheck,
  ShoppingCart,
  Wrench,
  CaretDown,

} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { Card } from '../../components/Card'

import { cars } from '../../../data.json'
import {
  CarList,

  ContainerFilter,

  FilterCamp,

  Heading,
  Hero,
  HeroContent,
  Info,
} from './styles'


import { useState } from 'react'

type CarType = {
  id: string
  title: string
  description: string
  marca: string
  model: string
  combustível: string
  ano: string
  tags: string[]
  price: number
  image: string
}



export function Home() {
  const theme = useTheme()

  const [filtroMarca, setFiltroMarca] = useState('')
  const [filtroModelo, setFiltroModelo] = useState('')
  const [filtroAno, setFiltroAno] = useState('')

  function getCategoriasUnicas(campo: keyof CarType) {
    const categorias = cars.map((car) => car[campo])
    const categoriasFiltradas = categorias.filter(
      (categoria): categoria is string => typeof categoria === 'string',
    )
    const categoriasUnicas = [...new Set(categoriasFiltradas)]
    return categoriasUnicas.length > 0 ? [''].concat(categoriasUnicas) : []
  }
 


  return (
    <div>
    
      <Hero>
        <HeroContent>
        
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

        <ContainerFilter>
          <FilterCamp>
            <label htmlFor="marca">Produtora</label>
            <select
              id="marca"
              value={filtroMarca}
              onChange={(e) => setFiltroMarca(e.target.value)}
            >
              <option value="" disabled hidden>
                Escolha uma marca!
              </option>
              {getCategoriasUnicas('marca').map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <CaretDown size={32} />
          </FilterCamp>
          <FilterCamp>
            <label htmlFor="">Modelo</label>
            <select
              id="modelo"
              value={filtroModelo}
              onChange={(e) => setFiltroModelo(e.target.value)}
            >
              <option value="" disabled hidden>
                Escolha um modelo!
              </option>

              {getCategoriasUnicas('model').map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <CaretDown size={32} />
          </FilterCamp>
          <FilterCamp>
            <label htmlFor="">Ano</label>
            <select
              id="ano"
              value={filtroAno}
              onChange={(e) => setFiltroAno(e.target.value)}
            >
              <option value="" disabled hidden>
                Escolha um ano!
              </option>

              {getCategoriasUnicas('ano').map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <CaretDown size={32} />
          </FilterCamp>
        </ContainerFilter>

        

        <div>
        {cars
            .filter((car) => {
              // Aplicar filtro por marca
              if (
                filtroMarca &&
                filtroMarca !== '' &&
                car.marca !== filtroMarca
              ) {
                return false
              }

              // Aplicar filtro por modelo
              if (
                filtroModelo &&
                filtroModelo !== '' &&
                car.model !== filtroModelo
              ) {
                return false
              }

              // Aplicar filtro por ano
              if (filtroAno && filtroAno !== '' && car.ano !== filtroAno) {
                return false
              }

              // Se passou por todos os filtros, exiba o carro
              return true
            })
            .map((car) => (
              <Card key={car.id} car={car} />
            ))}
        </div>
      </CarList>
    </div>
  )
}

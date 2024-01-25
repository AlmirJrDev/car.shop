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

  CardCar,

  ContainerFilter,

  FilterCamp,

  Heading,
  Hero,
  HeroContent,
  Info,
} from './styles'


import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

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
  const [filtroCombustivel, setFiltroCombustivel] = useState('')

  const [filtroPreco, setFiltroPreco] = useState(0);

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
       <Helmet title="Home" />
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
            <CaretDown size={25} />
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
            <CaretDown size={25} />
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
            <CaretDown size={25} />
          </FilterCamp>
          <FilterCamp>
      <label htmlFor="preco">Preço Máximo</label>
      <input
        type="range"
        min={0}
        max={1000000} // Defina um valor máximo adequado
        value={filtroPreco}
        step={25000}
        onChange={(e) => setFiltroPreco(Number(e.target.value))}
      />
      <span>   {' '}
            {new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(filtroPreco)}</span>
    </FilterCamp>

          <FilterCamp>
            <label htmlFor="">Combustivel</label>
            <select
              id="combustivel"
              value={filtroCombustivel}
              onChange={(e) => setFiltroCombustivel(e.target.value)}
            >
              <option value="" disabled hidden>
                Escolhe um combustivel
              </option>

              {getCategoriasUnicas('combustível').map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <CaretDown size={25} />
          </FilterCamp>
        </ContainerFilter>

        

        <CardCar>
        {cars
            .filter((car) => {
              
              if (
                filtroMarca &&
                filtroMarca !== '' &&
                car.marca !== filtroMarca
              ) {
                return false
              }

              if (
                filtroModelo &&
                filtroModelo !== '' &&
                car.model !== filtroModelo
              ) {
                return false
              }

              if (filtroAno && filtroAno !== '' && car.ano !== filtroAno) {
                return false
              }
              if (
                filtroPreco &&
                filtroPreco !== 0 &&
                car.price > filtroPreco
              ) {
                return false;
              }
        
              if (filtroCombustivel && filtroCombustivel !== '' && car.combustível !== filtroCombustivel) {
                return false
              }
              return true
            })
            .sort((a, b) => {
              return parseInt(b.ano, 10) - parseInt(a.ano, 10);
            })
            .map((car) => (
              <Card key={car.id} car={car} />
            ))}
        </CardCar>
      </CarList>
    </div>
  )
}

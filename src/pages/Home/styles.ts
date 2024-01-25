import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`


export const CarList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
export const ContainerFilter = styled.div`
  display: flex;
`

export const FilterCamp = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors['base-subtitle']};
  height: 4rem;
  border-radius: 20px;

  label {
    position: absolute;
    top: 0.25rem;
    left: 1rem;
    font-size: 0.625rem;
    padding: 0.65rem;
  }

  select {
    width: 100%;
    position: absolute;
    background: transparent;
    border: transparent;
    height: 4rem;
    padding: 1rem 1.5rem 0;
    border-radius: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    color: ${({ theme }) => theme.colors['teal-light']};

    option {
      background-color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }

  svg {
    position: absolute;
    top: 25%;
    right: 1.5rem;
  }
`

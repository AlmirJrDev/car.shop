import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  border-radius: 20px;
  width: 356px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CarImg = styled.img`
  margin-top: 15px;
  border-radius: 20px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors['teal-light']};
    color: ${({ theme }) => theme.colors['teal-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors['base-text']};
  ${mixins.fonts.titleS}
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme.colors['base-label']};
  ${mixins.fonts.textS}
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > a button {
    background-color: ${({ theme }) => theme.colors['teal-light']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme }) => theme.colors['teal-dark']};
    }
  }
`

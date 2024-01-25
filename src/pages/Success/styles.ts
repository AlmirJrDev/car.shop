import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 20px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  video {
    width: 45%;
    border-radius: 20px;
    @media (max-width: 700px) {
    display: none;
    }
  }
`

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors.teal};
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
`

export const InfoContent = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors['base-subtitle']};
  border-radius: 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`

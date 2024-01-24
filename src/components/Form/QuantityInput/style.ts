import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.green};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['green-light']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

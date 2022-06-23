import styled from 'styled-components'

export const OrderWrapperStyled = styled.div`
  background: white;
  margin: 1rem 0;
  padding: 2rem;

  p {
    margin-bottom: 0.5rem;
    span {
      color: var(--primary);
      font-weight: 700;
    }
  }
`

export const OrderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  h1,
  h2 {
    color: var(--secondary);
    font-weight: 400;
    font-size: 1rem;
    span {
      color: var(--primary);
      font-weight: 700;
    }
  }
`

export const LogoutStyled = styled.button`
  padding: 1rem 2.6rem;
  background: var(--primary);
  border: none;
  color: white;
  cursor: pointer;
`

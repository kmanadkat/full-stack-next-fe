import styled from 'styled-components'

export const ProductDetailsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
    border-radius: 8px;
  }
`

export const ProductInfoStyled = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`

export const QuantityStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }

  span {
    color: var(--secondary);
  }
`

export const BuyStyled = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`

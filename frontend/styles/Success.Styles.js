const { motion } = require('framer-motion')
import styled from 'styled-components'

export const WrapperStyled = styled.div`
  margin: 1rem 10rem;
`

export const CardStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 0;

  h2 {
    margin: 0.5rem 0;
  }

  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }
`

export const AddressStyled = styled.div`
  font-size: 1rem;
  width: 100%;
  margin: 1.5rem 0;
`

export const OrderInfoStyled = styled.div`
  font-size: 1rem;
  width: 100%;
  margin: 1.5rem 0;
  div {
    padding-bottom: 1rem;
  }
`

export const InfoWrapperStyled = styled.div`
  display: flex;
  margin: 2rem 0;
`

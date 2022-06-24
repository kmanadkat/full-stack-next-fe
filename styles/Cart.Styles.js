import styled from 'styled-components'
const { motion } = require('framer-motion')

export const CartWrapperStyled = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`

export const CartStyled = styled(motion.div)`
  width: 33%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: auto;
  position: relative;
`

export const CartCardStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
  padding: 1.5rem;
  margin: 2rem 0rem;
  .cart-item-image {
    width: 8rem;
    border-radius: 0.5rem;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    height: 9rem;
  }
`

export const CardInfoStyled = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }
`

export const CartEmptyStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  text-align: center;
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.8rem;
    padding: 1rem 0;
  }

  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`

export const CheckoutStyled = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`

export const CardsStyled = styled(motion.div)``

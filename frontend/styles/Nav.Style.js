import styled from 'styled-components'

export const NavStyled = styled.div`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  a {
    font-size: 1.5rem;
  }
`

export const NavItemsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
  }
`

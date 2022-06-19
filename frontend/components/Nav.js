import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { NavItemsStyled, NavStyled } from '../styles/Nav.Style'

export default function Nav() {
  return (
    <NavStyled>
      <Link href='/'>Get Your Swag</Link>
      <NavItemsStyled>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItemsStyled>
    </NavStyled>
  )
}

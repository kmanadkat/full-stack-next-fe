import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { useStateContext } from '../lib/context'
import { NavItemsStyled, NavStyled } from '../styles/Nav.Style'
import Cart from './Cart'

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useStateContext()
  return (
    <NavStyled>
      <Link href='/'>Get Your Swag</Link>
      <NavItemsStyled>
        <div onClick={() => setShowCart(true)}>
          <span>{totalQty}</span>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItemsStyled>
      {showCart && <Cart />}
    </NavStyled>
  )
}

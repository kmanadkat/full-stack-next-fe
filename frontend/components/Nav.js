import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { useStateContext } from '../lib/context'
import { NavItemsStyled, NavStyled } from '../styles/Nav.Style'
import Cart from './Cart'

const { AnimatePresence, motion } = require('framer-motion')

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useStateContext()
  return (
    <NavStyled>
      <Link href='/'>Get Your Swag</Link>
      <NavItemsStyled>
        <div onClick={() => setShowCart(true)}>
          {totalQty > 0 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
              {totalQty}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItemsStyled>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyled>
  )
}

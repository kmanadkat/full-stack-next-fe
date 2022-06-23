import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { useStateContext } from '../lib/context'
import { NavItemsStyled, NavStyled } from '../styles/Nav.Style'
import Cart from './Cart'
import User from './User'

const { AnimatePresence, motion } = require('framer-motion')

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useStateContext()
  const { user, error, isLoading } = useUser()

  return (
    <NavStyled>
      <Link href='/'>Get Your Swag</Link>
      <NavItemsStyled>
        <User user={user} />
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

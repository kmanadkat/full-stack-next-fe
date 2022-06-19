import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [qty, setQty] = useState(1)

  const increaseQty = () => {
    setQty((prev) => prev + 1)
  }

  const decreaseQty = () => {
    setQty((prev) => (prev === 1 ? prev : prev - 1))
  }

  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, setShowCart }}>
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)

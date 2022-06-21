import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [qty, setQty] = useState(1)
  const [totalQty, setTotalQty] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const increaseQty = () => {
    setQty((prev) => prev + 1)
  }

  const decreaseQty = () => {
    setQty((prev) => (prev === 1 ? prev : prev - 1))
  }

  const onAddToCart = (product, quantity) => {
    // Increase Total Price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity)
    // Increase Total Quantity
    setTotalQty((prevQty) => prevQty + quantity)
    // Product already in cart => update quantity
    const isExists = cartItems.findIndex((item) => item.slug === product.slug)
    if (isExists !== -1) {
      setCartItems((prevState) =>
        prevState.map((item) => ({
          ...item,
          quantity:
            item.slug === product.slug
              ? item.quantity + quantity
              : item.quantity,
        }))
      )
    } else {
      setCartItems((prevState) => [...prevState, { ...product, quantity }])
    }
  }

  const onRemoveFromCart = (product) => {
    // Decrease Total Price
    setTotalPrice((prevTotal) => prevTotal - product.price)
    // Decrease Total Quantity
    setTotalQty((prevQty) => prevQty - 1)
    // Product already in cart => update quantity
    const isExists = cartItems.findIndex((item) => item.slug === product.slug)
    if (isExists !== -1 && cartItems[isExists].quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug))
    } else if (isExists !== -1) {
      setCartItems((prevState) =>
        prevState.map((item) => ({
          ...item,
          quantity:
            item.slug === product.slug ? item.quantity - 1 : item.quantity,
        }))
      )
    }
  }

  return (
    <ShopContext.Provider
      value={{
        qty,
        cartItems,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        onAddToCart,
        onRemoveFromCart,
        totalQty,
        totalPrice,
      }}>
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)

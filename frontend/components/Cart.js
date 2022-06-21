import { useStateContext } from '../lib/context'
import {
  CardInfoStyled,
  CartCardStyled,
  CartEmptyStyled,
  CartStyled,
  CartWrapperStyled,
  CheckoutStyled,
  CardsStyled,
} from '../styles/Cart.Styles'
import { QuantityStyled } from '../styles/ProductDetails.Style'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

// Animation Variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

export default function Cart() {
  const { cartItems, setShowCart, onAddToCart, onRemoveFromCart, totalPrice } =
    useStateContext()

  return (
    <CartWrapperStyled
      onClick={() => setShowCart(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <CartStyled
        onClick={(e) => e.stopPropagation()}
        initial={{ x: '50%' }}
        animate={{ x: '0%' }}
        exit={{ x: '50%' }}
        transition={{ type: 'tween' }}>
        {cartItems.length < 1 && (
          <CartEmptyStyled
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}>
            <h2>You have more shopping to do 😉</h2>
            <FaShoppingCart />
          </CartEmptyStyled>
        )}
        <CardsStyled variants={cards} initial='hidden' animate='show'>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <CartCardStyled variants={card} key={item.slug}>
                <div
                  className='cart-item-image'
                  style={{
                    background: `url(${item.image.data.attributes.formats.thumbnail.url})`,
                  }}></div>
                <CardInfoStyled>
                  <h3>{item.title}</h3>
                  <h3>{item.price}$</h3>
                  <QuantityStyled>
                    <span>Quantity</span>
                    <button onClick={() => onRemoveFromCart(item)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAddToCart(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </QuantityStyled>
                </CardInfoStyled>
              </CartCardStyled>
            ))}
        </CardsStyled>
        {cartItems.length > 0 && (
          <CheckoutStyled>
            <h3>Subtotal: {totalPrice}$</h3>
            <button>Checkout</button>
          </CheckoutStyled>
        )}
      </CartStyled>
    </CartWrapperStyled>
  )
}

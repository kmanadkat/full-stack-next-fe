import { useRouter } from 'next/router'
import Image from 'next/image'
import GoldenRetriever from '../public/golden-retriever.png'
import Stripe from 'stripe'
import {
  AddressStyled,
  CardStyled,
  InfoWrapperStyled,
  OrderInfoStyled,
  WrapperStyled,
} from '../styles/Success.Styles'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET)

// Server Side Function
export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ['line_items'],
    }
  )
  return { props: { order } }
}

// Normal Component
export default function Success({ order }) {
  const { customer_details, line_items } = order
  const router = useRouter()
  return (
    <WrapperStyled>
      <CardStyled
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.75 }}>
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{customer_details.email}</h2>

        <InfoWrapperStyled>
          <AddressStyled>
            <h3>Address</h3>
            {Object.entries(customer_details.address).map(([key, value]) => (
              <p key={key}>
                {key} : {value}
              </p>
            ))}
          </AddressStyled>
          <OrderInfoStyled>
            <h3>Products</h3>
            {line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: INR {item.price.unit_amount / 100}</p>
              </div>
            ))}
          </OrderInfoStyled>
        </InfoWrapperStyled>
        <button onClick={() => router.push('/')}>Continue Shopping</button>
        <Image
          src={GoldenRetriever}
          alt='Golden Retriever'
          objectFit='contain'
          height={320}
        />
      </CardStyled>
    </WrapperStyled>
  )
}

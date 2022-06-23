import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import {
  LogoutStyled,
  OrderStyled,
  OrderWrapperStyled,
} from '../styles/ProfilePage.Styles'

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET)

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res)
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`]
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    })
    return { props: { orders: paymentIntents.data } }
  },
})

export default function Profile({ user, orders }) {
  console.log({ user, orders })
  const router = useRouter()

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders
            .filter((order) => order.status === 'succeeded')
            .map((order) => (
              <OrderWrapperStyled key={order.id}>
                <p>
                  Order Date:{' '}
                  <span>{new Date(order.created * 1000).toDateString()}</span>
                </p>
                <OrderStyled>
                  <h1>
                    Order Number: <span>{order.id}</span>
                  </h1>
                  <h2>
                    Amount:{' '}
                    <span>
                      {order.amount / 100}.00{' '}
                      {order.currency.toString().toUpperCase()}
                    </span>
                  </h2>
                  <h2>
                    Receipt Email: <span>{user.email}</span>
                  </h2>
                </OrderStyled>
              </OrderWrapperStyled>
            ))}
        </div>
        <LogoutStyled onClick={() => router.push('/api/auth/logout')}>
          Logout
        </LogoutStyled>
      </div>
    )
  )
}

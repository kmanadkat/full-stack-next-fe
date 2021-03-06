import { getSession } from '@auth0/nextjs-auth0'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET)

export default async function handler(req, res) {
  const session = getSession(req, res)
  const user = session?.user

  // Default Config
  const stripeSessionConfig = {
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['IN'],
    },
    shipping_options: [
      {
        shipping_rate: process.env.NEXT_PUBLIC_STRIPE_SHIPPING,
      },
      {
        shipping_rate: process.env.NEXT_PUBLIC_STRIPE_FREE_SHIPPING,
      },
    ],
    allow_promotion_codes: true,
    line_items: req.body.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.title,
          images: [item.image.data.attributes.formats.thumbnail.url],
        },
        unit_amount: item.price * 7500,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    })),
    success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/canceled`,
  }

  // Add customer id if user loggedin
  if (user) {
    const stripeId =
      user[`${process.env.NEXT_PUBLIC_BASE_URL}/stripe_customer_id`]
    console.log(stripeId)
    stripeSessionConfig['customer'] = stripeId
  }

  if (req.method === 'POST') {
    try {
      // Create Checkout Session
      const session = await stripe.checkout.sessions.create(stripeSessionConfig)
      res.status(200).json(session)
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message)
    }
  }
}

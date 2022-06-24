import { loadStripe } from '@stripe/stripe-js'

const getStripe = async () => {
  let stripe
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
  }
  return stripe
}

export default getStripe

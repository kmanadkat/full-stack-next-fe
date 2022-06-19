import '../styles/globals.css'
import { Provider, createClient } from 'urql'

import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  const apiUrl = process.env.NEXT_PUBLIC_API
  const client = createClient({ url: apiUrl })
  return (
    <Provider value={client}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

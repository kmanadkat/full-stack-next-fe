import '../styles/globals.css'
import { Provider, createClient } from 'urql'

import Nav from '../components/Nav'
import { StateContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  const apiUrl = process.env.NEXT_PUBLIC_API
  const client = createClient({ url: apiUrl })
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  )
}

export default MyApp

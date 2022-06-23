import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider, createClient } from 'urql'

import Nav from '../components/Nav'
import { StateContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  const apiUrl = process.env.NEXT_PUBLIC_API
  const client = createClient({ url: apiUrl })
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  )
}

export default MyApp

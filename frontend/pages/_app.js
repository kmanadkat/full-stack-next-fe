import '../styles/globals.css'
import { Provider, createClient } from 'urql'

function MyApp({ Component, pageProps }) {
  const apiUrl = process.env.NEXT_PUBLIC_API
  const client = createClient({ url: apiUrl })
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

import Head from 'next/head'
import { useQuery } from 'urql'
import Product from '../components/Product'
import { PRODUCT_QUERY } from '../lib/query'

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY })
  const { data, error, fetching } = results

  // Check if data ready
  if (fetching) return <p>Loading...</p>

  if (error) return <p>Oh no... {error.message}</p>

  const products = data.products.data
  console.log(products)
  return (
    <div>
      <Head>
        <title>Get Your Swag</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Home Page</h1>
        {products.map((product) => (
          <Product product={product.attributes} key={product.attributes.slug} />
        ))}
      </main>
    </div>
  )
}

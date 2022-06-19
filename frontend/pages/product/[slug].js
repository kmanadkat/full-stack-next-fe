import { useRouter } from 'next/router'
import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import {
  BuyStyled,
  ProductDetailsStyled,
  ProductInfoStyled,
  QuantityStyled,
} from '../../styles/ProductDetails.Style'

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useStateContext } from '../../lib/context'

export default function ProductDetails() {
  // App Data
  const { query } = useRouter()
  const { qty, increaseQty, decreaseQty } = useStateContext()

  // Service Data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })
  const { data, error, fetching } = results

  // Check if data ready
  if (fetching) return <p>Loading...</p>

  if (error) return <p>Oh no... {error.message}</p>
  console.log(data)

  const { title, description, image } = data.products.data[0].attributes
  const { medium } = image.data.attributes.formats

  return (
    <ProductDetailsStyled>
      <img src={medium.url} alt={title} />
      <ProductInfoStyled>
        <h3>{title}</h3>
        <p>{description}</p>
        <QuantityStyled>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </QuantityStyled>
        <BuyStyled>Add to cart</BuyStyled>
      </ProductInfoStyled>
    </ProductDetailsStyled>
  )
}

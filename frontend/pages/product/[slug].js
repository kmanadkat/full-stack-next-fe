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

export default function ProductDetails() {
  const { query } = useRouter()

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })

  const { data, error, fetching } = results

  // Check if data ready
  if (fetching) return <p>Loading...</p>

  if (error) return <p>Oh no... {error.message}</p>
  console.log(data)

  const { title, description, image, price } = data.products.data[0].attributes
  const { medium } = image.data.attributes.formats

  return (
    <ProductDetailsStyled>
      <img src={medium.url} alt={title} />
      <ProductInfoStyled>
        <h3>{title}</h3>
        <p>{description}</p>
        <QuantityStyled>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillPlusCircle />
          </button>
        </QuantityStyled>
        <BuyStyled>Add to cart</BuyStyled>
      </ProductInfoStyled>
    </ProductDetailsStyled>
  )
}

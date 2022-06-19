import { ProductStyles } from '../styles/Product.Style'
import Link from 'next/link'

export default function Product({ product }) {
  const { title, price, image, slug } = product
  const { small } = image.data.attributes.formats

  return (
    <ProductStyles>
      <Link href={`/product/${slug}`}>
        <div style={{ backgroundImage: `url(${small.url})` }}></div>
      </Link>
      <h2>{title}</h2>
      <h3>${price}</h3>
    </ProductStyles>
  )
}

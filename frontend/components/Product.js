import { ProductStyles } from '../styles/Product.Style'

export default function Product({ product }) {
  const { title, price, image } = product
  const { small } = image.data.attributes.formats

  return (
    <ProductStyles>
      <div style={{ backgroundImage: `url(${small.url})` }}></div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyles>
  )
}

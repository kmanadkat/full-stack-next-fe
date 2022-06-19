export default function Product({ product }) {
  const { title, price, image } = product
  const { small } = image.data.attributes.formats

  return (
    <div>
      <div>
        <img src={small.url} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  )
}

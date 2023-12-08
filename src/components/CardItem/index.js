import './index.css'

const CardItem = props => {
  const {list} = props
  const {title, description, imgUrl, className} = list

  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <img src={imgUrl} alt={title} className="image1" />
    </li>
  )
}
export default CardItem

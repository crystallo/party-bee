 const Card = ({ item }) => {
  return (
    <div class="card">
      <div className="card_image">{item.image}</div>
      <div className="card_name">{item.name}</div>
      <div className="card_price">{item.price}</div>"
      <button className="card_button">Detail</button>
    </div>
  )
}

export default Card;
const Card = ({ image, name }) => {
  return (
    <div class="card">
      <div class="card_image">{image}</div>
      <div class="name">{name}</div>
      <button>Detail</button>
    </div>
  )
}
import './style.css';

import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <div className="pc_image"><img className="pc_image_image" src={require(`../../assets/collections/bouncehouses/${item.id}/${item.id}_1.jpg`).default} /></div>
      <div className="pc_title">{item.name}</div>
      <div className="pc_price">${item.price}</div>
      <Link to={`/collections/${item.id}`}><p className="pc_button">Details</p></Link>
    </div>
  )
}

export default ProductCard;
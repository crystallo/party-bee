import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <h1>LOGO</h1>
      <nav className="nav">
        <ul className="nav_Linkst">
          <Link className="nav_item" to="/about">About</Link>
          <Link className="nav_item" to="/collections">Collections</Link>
          <Link className="nav_item" to="/faqs">FAQs</Link>
          <Link className="nav_item" to="/contactus">Contact Us</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
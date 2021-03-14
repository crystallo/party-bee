import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <nav className="nav">
        <ul className="nav_Linkst">
          <Link className="nav_item" to="/about">About</Link>
          <Link className="nav_item" to="/collections">Collections</Link>
          <Link className="nav_item" to="/faqs">FAQs</Link>
          <Link className="nav_item" to="/contactus">Contact Us</Link>
        </ul>
      </nav>
  )
}

export default Header;
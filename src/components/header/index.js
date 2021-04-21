import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">PARTY LLAMA</h1>
      <nav className="nav">
        <ul className="nav_list">
          <li><NavLink className="nav_item" to="/about">About</NavLink></li>
          <li><NavLink className="nav_item" to="/collections">Collections</NavLink></li>
          <li><NavLink className="nav_item" to="/faqs">FAQs</NavLink></li>
          <li><NavLink className="nav_item reserve_now" to="/contactus">Reserve Now/Contact Us</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
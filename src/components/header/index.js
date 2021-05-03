import { NavLink } from 'react-router-dom';

// import { Logo } from '../../images/logos/logo_300.png';
import './style.css'

import { ReactComponent as Logo } from '../../images/logos/logo1.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="title_container">
      <div className="title">
      <a href="/">
        {/* <div className="title_logo"> */}
          
            <Logo className="logo" />
            
        {/* </div> */}
        </a>
      </div>
       <div className="title_text">
       <p>Party Llama Rentals</p>
        </div>
        </div>
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
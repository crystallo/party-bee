import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const Footer = () => {
  return (
    <section className="footer">
      <p>2020 Party Bee</p>
      <div className="social">
        <FontAwesomeIcon icon={["far", "coffee"]} />
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </div>
    </section>
  )
}

export default Footer;
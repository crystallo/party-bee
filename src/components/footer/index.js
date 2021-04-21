import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const Footer = () => {
  return (
    <section className="footer">
      <p>© 2021 Party Llama</p>
      <div className="social">
        <FontAwesomeIcon icon={["far", "coffee"]} />
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </div>
    </section>
  )
}

export default Footer;
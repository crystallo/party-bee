import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function Footer() {
  return (
    <section className="footer">
      <p>© 2021 Party Llama Rentals. </p>
      <div className="social">
        <a href="https://www.instagram.com/partyllamarentals/" target="_blank" alt="Instagram" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
      </div>
    </section>
  )
}
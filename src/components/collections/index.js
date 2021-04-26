import ProductCard from '../productcard';
import { getBounceHouses } from '../../services/firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Collections() {
  const [bounceHouses, setBounceHouses] = useState(null);

  useEffect(async () => {
    const bouncehouses = await getBounceHouses();
    setBounceHouses(bouncehouses);
  }, []);

  return (
    <section className="collections">
      <h1>Collections</h1>

      <div className="collections_grid">
        { bounceHouses ? (
          bounceHouses.map((item) => (
            <ProductCard item={item} />
          ))
        ) : (<h1>Loading ... </h1>) }
      </div>

    </section>
  )
}

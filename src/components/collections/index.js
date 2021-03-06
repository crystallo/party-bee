import ProductCard from '../productcard';
import { getBounceHouses } from '../../services/firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Collections() {
  const [bounceHouses, setBounceHouses] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const bouncehouses = await getBounceHouses();
      setBounceHouses(bouncehouses);
    }
    fetchData();
  }, []);

  return (
    <section className="collections">
      <h1>Collections</h1>

      <div className="collections_grid">
        { bounceHouses ? (
          bounceHouses.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))
        ) : (<h1>Loading ... </h1>) }
      </div>

    </section>
  )
}

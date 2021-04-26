import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

import { getBounceHouseByID } from '../../services/firebase';

export default function BounceHouse() {
  const {productID} = useParams();
  const [bounceHouse, setBounceHouse] = useState(null);

  useEffect(async () => {
    const bounceHouse = await getBounceHouseByID(productID);
    console.log("bouncehouse: ", bounceHouse[0]);
    setBounceHouse(bounceHouse[0]);
  }, []);

  return (
    <section className="bouncehouse">
      { bounceHouse ? (
        <div className="bh-card">
          <h1>{bounceHouse.name}</h1>
          <p>Name: </p>
          <p>Price: </p>
          <p>Dimension: </p>
          <p>Description: </p>
        </div>
      ) : (<h1>Loading ... </h1>)}
      
    </section>
  )
}
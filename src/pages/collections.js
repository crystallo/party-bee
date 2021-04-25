
import { useState, useEffects } from 'react';

import Card from '../components/card';

export default function Collections() {
  const [bouncehouses, setBounceHouses] = useState({});

  return (
    <div>
      {bouncehouses.map((bouncehouse) => (
        <Card item={bouncehouse} />
      ))}
    </div>
  )
}
import { useState, useEffect } from 'react';
import { getBounceHouses } from '../services/firebase';

export default function useBounceHouses() {
  const [bounceHouses, setBounceHouses] = useState(null);

  useEffect(() => {
    // const bounceHouses = getBounceHouses();
    // console.log("bounce houses: ", bounceHouses);
    // setBounceHouses(bounceHouses);

    async function get() {
      console.log("am i called");
      const bounceHouses = await getBounceHouses();
      console.log("setting houses");
      setBounceHouses(bounceHouses);
    }

    get();

    console.log("here");

  }, []);

  return bounceHouses;
}
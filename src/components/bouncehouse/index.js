import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SimpleImageSlider from "react-simple-image-slider";

import { getBounceHouseByID } from '../../services/firebase';
import Features from './features';
import './style.css'

export default function BounceHouse() {
  const {productID} = useParams();
  const [bounceHouse, setBounceHouse] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchBounceHouse() {
      const bouncehouse = await getBounceHouseByID(productID);
      setBounceHouse(bouncehouse);
    }
    fetchBounceHouse();
    console.log(bounceHouse)
  }, []);

  return (
    <section className="bouncehouse">
      { bounceHouse ? (
        <div className="bh-card">
          <div class="bh-card_pictures">

          </div>
          <div className="bh-card_info">
            <h1>{bounceHouse.name}</h1>
            { bounceHouse.description ? (<p>Description: {bounceHouse.description}</p>) : null }
            <p>Price: </p>
            <p>Dimension(ft): {bounceHouse.width} x {bounceHouse.length}</p>
          </div>
          { bounceHouse.features ? (
            <Features features={bounceHouse.features} />
          ) : null}
        </div>
      ) : (<h1>Loading ... </h1>)}
      
    </section>
  )
}
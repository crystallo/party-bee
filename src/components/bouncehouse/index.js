import { useState } from 'react';

export const BounceHouse = () => {
  const [id, setID] = useState('')
  const [name, setName] = useState('')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [depth, setDepth] = useState(0)
  const [price, setPrice] = useState(0.00)
  const [description, setDescription] = useState('')
  const [pictures, setPictures] = useState([])
}